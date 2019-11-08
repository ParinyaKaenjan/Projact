import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovietimebookingPage } from '../movietimebooking/movietimebooking';
import { UserPage } from '../user/user';
import { TicketPage } from '../ticket/ticket';
import { MovietabPage } from '../movietab/movietab';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { MovieModel } from '../../models/MovieModel';
import { UserModel } from '../../models/UsersModel';
import { AddmoviePage } from '../addmovie/addmovie';

/**
 * Generated class for the HometicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hometicket',
  templateUrl: 'hometicket.html',
})
export class HometicketPage {
  MovieM: MovieModel;
  movieById: any;
  userid: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public conectAPI: ConnectApiProvider) {
    this.get()
    this.userid = this.conectAPI.user._id;
    console.log(this.userid);
    console.log(conectAPI.user.status);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HometicketPage');
  }

  get() {
    this.conectAPI.movie().subscribe(data => {
      this.MovieM = data;
      this.conectAPI.movieM = data;
      console.log(this.conectAPI.movieM)
    });
  }
  CreateMovie() {
    this.navCtrl.push(AddmoviePage);
  }

  goTimeBooking(_id: string, user: UserModel) {
    this.navCtrl.push(MovietimebookingPage, { _id: _id, user: user });
    console.log(this.userid);
  }

  goHomeTicketPage() {
    this.navCtrl.setRoot(HometicketPage)
  }
  goTicketPage(_id: string) {
    this.navCtrl.setRoot(TicketPage, { _id: _id });
    console.log(_id);
  }
  goUserPage() {
    this.navCtrl.setRoot(UserPage)
  }

}
