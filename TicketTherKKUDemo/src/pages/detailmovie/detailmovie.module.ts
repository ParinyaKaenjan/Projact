import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailmoviePage } from './detailmovie';

@NgModule({
  declarations: [
    DetailmoviePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailmoviePage),
  ],
})
export class DetailmoviePageModule {}
