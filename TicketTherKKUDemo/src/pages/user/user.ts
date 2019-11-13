import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HometicketPage } from '../hometicket/hometicket';
import { TicketPage } from '../ticket/ticket';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/UsersModel';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { text } from '@angular/core/src/render3/instructions';
import { AddmoviePage } from '../addmovie/addmovie';
import { ViewtotalPage } from '../viewtotal/viewtotal';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  User: UserModel;
  userid: any;
  userList: UserModel[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public connectAPI: ConnectApiProvider, public alert: AlertController) {
    console.log(this.connectAPI.user);
    //this.getId();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad UserPage');
    // this.http.get<UserModel>("https://localhost:5001/api/User/GetAllUser")
    //   .subscribe(data => {
    //     console.log(data);
    //     this.User = data;
    //   });
  }

  // getId() {
  //   this.connectAPI.getId(this.userid).subscribe(data => {
  //     this.User = data;
  //     this.userid = data._id;
  //     console.log(this.userid);
  //     //console.log(this.User);
  //   });
  // }}
  viewtotal() {
    this.navCtrl.push(ViewtotalPage);
  }

  logout() {
    let Chackout = this.alert.create({
      message: 'คุณต้องการจะออกจากระบบหรือไม่',
      buttons: [{
        text: 'ยกเลิก',
        handler: () => {
          console.log("ยกเลิก");

        }
      },
      {
        text: 'ยืนยัน',
        handler: () => {
          console.log("ยืนยัน");
          this.navCtrl.setRoot(HomePage)
        }
      }]
    });
    Chackout.present();
  }

  goHomeTicketPage() {
    this.navCtrl.setRoot(HometicketPage)
  }
  goTicketPage(userid: string) {
    this.navCtrl.setRoot(TicketPage, { userid: userid })
  }
  goUserPage() {
    this.navCtrl.setRoot(UserPage)
  }


}
