import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddmoviePage } from './addmovie';

@NgModule({
  declarations: [
    AddmoviePage,
  ],
  imports: [
    IonicPageModule.forChild(AddmoviePage),
  ],
})
export class AddmoviePageModule {}
