import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealsDayPage } from './deals-day.page';

const routes: Routes = [
  {
    path: '',
    component: DealsDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealsDayPageRoutingModule {}
