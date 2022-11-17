import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPaymentPageRoutingModule } from './confirmation-payment-routing.module';

import { ConfirmationPaymentPage } from './confirmation-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPaymentPageRoutingModule
  ],
  declarations: [ConfirmationPaymentPage]
})
export class ConfirmationPaymentPageModule {}
