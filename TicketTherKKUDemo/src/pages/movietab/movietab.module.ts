import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovietabPage } from './movietab';

@NgModule({
  declarations: [
    MovietabPage,
  ],
  imports: [
    IonicPageModule.forChild(MovietabPage),
  ]
})
export class MovietabPageModule {}
