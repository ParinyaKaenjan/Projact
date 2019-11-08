import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HometicketPage } from './hometicket';

@NgModule({
  declarations: [
    HometicketPage,
  ],
  imports: [
    IonicPageModule.forChild(HometicketPage),
  ],
})
export class HometicketPageModule {}
