import { Component, OnInit, Input, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { ButtonProps } from "./pay-button-props";
import { WindowRef } from "./WindowRef";

// razorpay checkout.js script url
const RAZOR_PAY_CHECKOUT_SCRIPT_URL =
  "https://checkout.razorpay.com/v1/checkout.js";

// default style of the button
const style = `.pay-btn {
  padding: 10px;
  background-color: #03a9f4;
  font-size: 1em;
  border: none;
  border-radius: 2px;
  min-width: 100px;
  color: #ffffffe4;
  outline: none;
  cursor: pointer;
}`;

@Component({
  selector: "theta-one-pay-button",
  template: `
    <button
      type="button"
      class="pay-btn"
      [ngStyle]="props.style"
      (click)="openCheckout()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [style]
})


export class ThetaOnePayButtonComponent implements OnInit {
  @Input() props: ButtonProps;
  rzp: any;

  constructor(
    private winRef: WindowRef,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {}

  // onClick handler of the Pay button
  // initiates razorpay module and opens the razorpay modal window
  public openCheckout(): void {
    try {
      // check for valid amount
      if (!this.props.amount) {
        throw "Please provide valid amount";
      }

      // check for keyId
      if (!this.props.keyId) {
        throw "keyId is required";
      }

      // check for success callback
      if (!this.props.onSucess) {
        throw "onSuccess callback is required";
      }
      const options = {
        key: this.props.keyId,
        amount: this.props.amount,
        name: this.props.merchantName,
        description: this.props.description,
        image: this.props.logoUrl,
        handler: response => this.props.onSucess(response),
        modal: {
          ondismiss: () => {
            if (this.props.onDismiss) {
              this.props.onDismiss({ error: "Modal Window dismissed" });
            }
          }
        },
        prefill: {
          name: this.props.prefillName,
          email: this.props.prefillEmail
        },
        notes: { ...this.props.notes },
        theme: { color: this.props.themeColor }
      };

      // error handler
      const onError = response => {
        if (this.props.onError) {
          this.props.onError(response.error);
        }
      };

      // call the preprocessing callback before redirecting to
      // razorpay modal window
      if (this.props.preProcess) {
        this.props.preProcess();
      }
      this.rzp = new this.winRef.nativeWindow.Razorpay(options);
      this.rzp.on("payment.error", onError);
      this.rzp.open();
    } catch (error) {
      if (this.props.onError) {
        this.props.onError(error);
      }
    }
  }

  ngOnInit() {
    try {     
      // insert razorpay checkout.js script into the DOM
      const s = this._renderer2.createElement("script");
      s.src = RAZOR_PAY_CHECKOUT_SCRIPT_URL;
      this._renderer2.appendChild(this._document.body, s);
    } catch (error) {
      if (this.props.onError) {
        this.props.onError(error);
      }
    }
  }
}
