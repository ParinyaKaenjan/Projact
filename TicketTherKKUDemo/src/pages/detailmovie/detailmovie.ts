import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { UserModel } from '../../models/UsersModel';

/**
 * Generated class for the DetailmoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailmovie',
  templateUrl: 'detailmovie.html',
})
export class DetailmoviePage {

  movieM: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public connectAPI: ConnectApiProvider) {
    this.movieM = this.navParams.get('movieM')
    console.log(this.movieM.img);
    console.log(this.movieM.namemovie);
    console.log(this.movieM.datemovie);
    console.log(this.movieM.detailmovie);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailmoviePage');
  }

}
