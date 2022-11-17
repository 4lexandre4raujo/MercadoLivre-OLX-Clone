import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealsDayPageRoutingModule } from './deals-day-routing.module';

import { DealsDayPage } from './deals-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealsDayPageRoutingModule
  ],
  declarations: [DealsDayPage]
})
export class DealsDayPageModule {}
