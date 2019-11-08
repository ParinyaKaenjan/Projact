import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Button } from 'ionic-angular';
import { HometicketPage } from '../hometicket/hometicket';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { UserModel } from '../../models/UsersModel';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { t } from '@angular/core/src/render3';
import { Subscriber } from 'rxjs/Subscriber';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  newUser: UserModel;
  Username: string;
  Password: string;
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public connecAPI: ConnectApiProvider) {

    // this.connecAPI.test().subscribe(data => {
    //   this.users = data;
    //   console.log(this.users);
    // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    /*ต้องคอนเน็คApiProvidersก่อนถึงจะเรียกใช้ฟังชั่นนี้ได้*/
    const alert = this.alertCtrl.create({
      title: "แจ้งเตือน",
      message: "กรุณาตรวจสอบ Username Password",
      buttons: ['ok']
    });
    if (this.Username == "" || this.Password == "") {
      alert.present();
    }
    else {
      this.connecAPI.login(this.Username, this.Password).subscribe(data => {
        this.connecAPI.user = data;
        if (this.connecAPI.user == null) {
          //alert.present();
        }
        else {
          this.navCtrl.setRoot(HometicketPage);
        }
      });
    }
  }

  test() {
    this.navCtrl.setRoot(HometicketPage)
    console.log(UserModel)
  }

  gosignup() {
    this.navCtrl.push(SignupPage);
  }

}
