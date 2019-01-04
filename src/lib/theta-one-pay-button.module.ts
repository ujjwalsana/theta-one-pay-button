import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ThetaOnePayButtonComponent } from './theta-one-pay-button.component';
import {WindowRef } from "./WindowRef";

@NgModule({
  imports: [CommonModule],
  providers: [WindowRef ],
  declarations: [ThetaOnePayButtonComponent],
  exports: [ThetaOnePayButtonComponent]
})
export class PayButtonModule { }
