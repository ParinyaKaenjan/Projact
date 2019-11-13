import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HometicketPage } from '../hometicket/hometicket';
import { UserPage } from '../user/user';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { TicketModel } from '../../models/TicketModel';
/**
 * Generated class for the TicketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  ticket: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public conectAPI: ConnectApiProvider, public alertCtrl: AlertController) {
    this.getByid();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
  }

  // getallticket() {
  //   this.conectAPI.getallticket().subscribe(data => {
  //     this.ticket = data;
  //     console.log(this.ticket);
  //   });
  // };

  getByid() {
    this.conectAPI.getByidTicket(this.conectAPI.user._id).subscribe(data => {
      this.ticket = data;
      console.log(this.ticket);
    });
  }

  useticket(_id: string) {
    console.log(_id);
    this.conectAPI.useticket(_id).subscribe(data => {
    });

    const pp = this.alertCtrl.create({
      title: "ยืนยัน",
      message: "คุณต้องการจะใช้ตั๋วหรือไม่",
      buttons: [{
        text: "ยกเลิก",
      },
      {
        text: "ตกลง",
        handler: () => {
        }
      }]
    });
    //pp.present();
  }

  goHomeTicketPage() {
    this.navCtrl.setRoot(HometicketPage)
  }
  goTicketPage() {
    this.navCtrl.setRoot(TicketPage)
  }
  goUserPage() {
    this.navCtrl.setRoot(UserPage)
  }
}
