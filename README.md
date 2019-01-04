# theta-one-pay-button

Angular module for payment gateway using RazorPay.

## Install

```
npm install --save theta-one-pay-button
```

## Usage

```
// In app.module.ts

import {PayButtonModule} from 'theta-one-pay-button';

@NgModule({
  declarations: [
      ...
    ],
  imports: [
    ....
    PayButtonModule
    .....
  ],
  providers: [
      ....
  ],
  bootstrap: [
      ....
  ]
})


// In HTML Template
<theta-one-pay-button [props]="props"> Pay </theta-one-pay-button>


// In app.component.ts
export class AppComponent {
  title = "RazorPay Pay Button Demo";
  amount = 100;
  style = {
    backgroundColor: "#ff5454",
    color: "#fff"
  };
  keyId = "******************"; // merchant keyId provided by RazorPay
  merchantName = "Theta One Pvt. Ltd.";
  description = "Purchase Demo";
  logoUrl = "/logo";
  prefillName = "Ujjwal Sana";
  prefillEmail = "ujjwal.sana@thetaonelab.com";
  themeColor = "lightblue";
  notes = { address: "Kolkata", purpose: "demo purchase" };

  public onSucess(res) {
    console.log(res);
  }
  public onError(error) {
    console.log(error);
  }
  public onDismiss(message) {
    console.log(message);
  }
  public preProcess() {
    console.log("preProcess callback");
  }

  props = {
    style: this.style,
    amount: this.amount,
    keyId: this.keyId,
    merchantName: this.merchantName,
    description: this.description,
    logoUrl: this.logoUrl,
    prefillName: this.prefillName,
    prefillEmail: this.prefillEmail,
    themeColor: this.themeColor,
    notes: this.notes,
    onSucess: this.onSucess,
    onError: this.onError,
    onDismiss: this.onDismiss,
    preProcess: this.preProcess
  };
}

```
