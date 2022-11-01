import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnouncementListPageRoutingModule } from './announcement-list-routing.module';

import { AnnouncementListPage } from './announcement-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnouncementListPageRoutingModule
  ],
  declarations: [AnnouncementListPage]
})
export class AnnouncementListPageModule {}
