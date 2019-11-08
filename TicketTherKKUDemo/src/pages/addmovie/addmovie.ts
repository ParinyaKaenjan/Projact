import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Toast, ToastController } from 'ionic-angular';
import { MovieModel } from '../../models/MovieModel';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { HometicketPage } from '../hometicket/hometicket';

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
      message: 'กรุณากรองข้อมูลให้ครบ'
    });
    const confrim = this.alert.create({
      title: "ยืนยันการสร้าง",
      message: "คุณต้องการจะสร้างหรือไม่",
      buttons: [{
        text: "ยกเลิก",
        handler: () => {
          console.log("ยกเลิก");
        }
      },
      {
        text: "ตกลง",
        handler: () => {
          if (this.newMovie = null) {
            popup.present();
          }
          else {
            this.conncetAPI.createmovie(this.newMovie).subscribe(data => {
              this.navCtrl.setRoot(HometicketPage);
            });
            console.log("ตกลง");
          }
        }
      }]
    });
    console.log(this.newMovie);
    confrim.present();
  }

}
