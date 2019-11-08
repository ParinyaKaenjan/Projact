import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Item, Button } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserModel } from '../../models/UsersModel';
import { HttpClient } from '@angular/common/http';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newUser: UserModel = new UserModel;
  confirm: string;
  alluser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient, public connecAPI: ConnectApiProvider) {

    // this.del();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');

    // this.Confirm();
  }

  SignUp() {
    // console.log(this.newUser.password)
    // console.log(this.confirm)
    let check = this.alertCtrl.create({
      title:"แจ้งเตือน",
      message: "กรุณากรอกข้อมูลให้ครบ",
      buttons: ['ok']
    });
    let check1 = this.alertCtrl.create({
      title:"แจ้งเตือน",
      message: "Pass กับ Comfirm ไม่ตรงกัน",
      buttons: ['ok']
    });

    if (this.confirm == null) {
      check.present();
    }
    else {
      if (this.newUser.password == this.confirm) {
        this.connecAPI.creatUser(this.newUser).subscribe(data => {
          this.navCtrl.push(LoginPage);
          this.getalluser();
        });
      }
      else {
        check1.present();
      }
    }

  }
  getalluser() {
    this.connecAPI.test().subscribe(data => {
      this.alluser = data;
      console.log(this.alluser);
    });
  }
  // del() {
  //   this.connecAPI.del(this.id).subscribe(data => {
  //     this.students = data;
  //     console.log(this.students);

  //   });

  // }
}

