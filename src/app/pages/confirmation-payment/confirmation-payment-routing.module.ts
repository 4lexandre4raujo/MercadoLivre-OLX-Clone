import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPaymentPage } from './confirmation-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPaymentPageRoutingModule {}
