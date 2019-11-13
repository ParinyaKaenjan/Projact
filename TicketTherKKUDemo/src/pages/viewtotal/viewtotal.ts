import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';

/**
 * Generated class for the ViewtotalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewtotal',
  templateUrl: 'viewtotal.html',
})
export class ViewtotalPage {
  iduser: any;
  movie: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public connectAPI: ConnectApiProvider) {
    this.iduser = this.connectAPI.user._id
    console.log(this.iduser);
    this.viewtotallmovie();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewtotalPage');
  }
  viewtotallmovie() {
    this.connectAPI.getMovieByiduser(this.iduser).subscribe(data => {
      this.movie = data
      console.log(this.movie);

    });
  }
  ViewUnuseTicket(){
    this.connectAPI
  }
  ViewUseTicket(){
    this.connectAPI
  }
}
