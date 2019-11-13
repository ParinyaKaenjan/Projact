import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Toast, ToastController } from 'ionic-angular';
import { MovieModel } from '../../models/MovieModel';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { HometicketPage } from '../hometicket/hometicket';
import { e } from '@angular/core/src/render3';

/**
 * Generated class for the AddmoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmovie',
  templateUrl: 'addmovie.html',
})
export class AddmoviePage {
  newMovie: MovieModel = new MovieModel;
  movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conncetAPI: ConnectApiProvider, public alert: AlertController, public toast: ToastController) {
    this.newMovie.iduser = this.conncetAPI.user._id;
    //this.newMovie.img = null;
    this.getAllMovie();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmoviePage');
  }
  getAllMovie() {
    this.conncetAPI.movie().subscribe(data => {
      this.movie = data;
      console.log(this.movie);
    })
  }
  CreateMovie() {
    const popup = this.toast.create({
      message: 'กรุณากรองข้อมูลให้ครบ',
      duration: 3000
    });
    if (this.newMovie.img == null || this.newMovie.img == "" || this.newMovie.namemovie == null || this.newMovie.namemovie == "" || this.newMovie.showtime == null || this.newMovie.showtime == "" || this.newMovie.ticketvip == 0 || this.newMovie.ticketnomal == 0 || this.newMovie.totalticket == null || this.newMovie.totalticket == "") {
      //if (this.newMovie.img == null && this.newMovie.img == "" && this.newMovie.namemovie == null && this.newMovie.namemovie == "" && this.newMovie.showtime == null && this.newMovie.showtime == "" && this.newMovie.ticketvip == 0 && this.newMovie.ticketnomal == 0 && this.newMovie.totalticket == null && this.newMovie.totalticket == "") {
      console.log("ok");
      popup.present();
    }
    else {
      console.log(this.newMovie);
      this.conncetAPI.createmovie(this.newMovie).subscribe(data => {
        this.navCtrl.pop();
      });
    }
    console.log(this.newMovie);
  }

}
