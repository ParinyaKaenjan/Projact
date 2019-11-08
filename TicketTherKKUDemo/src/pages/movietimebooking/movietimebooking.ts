import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button, Alert, AlertController, Img } from 'ionic-angular';
import { HometicketPage } from '../hometicket/hometicket';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Title } from '@angular/platform-browser';
import { text } from '@angular/core/src/render3/instructions';
import { UserPage } from '../user/user';
import { TicketPage } from '../ticket/ticket';
import { ConnectApiProvider } from '../../providers/connect-api/connect-api';
import { TicketModel } from '../../models/TicketModel';
import { UserModel } from '../../models/UsersModel';
import { DetailmoviePage } from '../../pages/detailmovie/detailmovie';
import { MovieModel } from '../../models/MovieModel';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the MovietimebookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movietimebooking',
  templateUrl: 'movietimebooking.html',

})

export class MovietimebookingPage {
  ticketmovie: TicketModel = new TicketModel;
  idmovie: any;
  movieM: MovieModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alrertCtrl: AlertController, public conncetAPI: ConnectApiProvider, public toastCtal: ToastController) {
    this.idmovie = this.navParams.get('_id');
    console.log(this.idmovie);
    this.ticketmovie.Iduser = this.conncetAPI.user._id;
    console.log(this.ticketmovie);
    this.getIdMovie();
    // this.ticketmovie.imgticket = this.navParams.get('img');
  }
  //ส่วนโชว์
  imgmovie: any;
  moviename: any;
  showtime: any;
  faculty: any;
  totalticket: any;

  //ส่วนคำนวณ
  Rank: any = 0;
  ticketvip: Number;
  ticketnomal: Number;
  Ticket: Number = 1;
  time: any;
  PriceTicket: Number = 0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovietimebookingPage');
  }

  getIdMovie() {
    this.conncetAPI.getIDmovie(this.idmovie).subscribe(data => {
      this.movieM = data;
      this.imgmovie = data.img
      this.moviename = data.namemovie
      this.showtime = data.showtime
      this.totalticket = data.totalticket
      this.faculty = data.faculty
      this.ticketvip = data.ticketvip
      this.ticketnomal = data.ticketnomal
      console.log(data.ticketnomal);
      console.log(this.faculty);
      console.log(this.ticketvip);
      console.log(this.ticketnomal);


    });
  }
  godetail(movieM: MovieModel) {
    this.navCtrl.push(DetailmoviePage, { movieM: movieM });
    console.log(movieM)
  }
  sumticket() {
    this.PriceTicket = 0;
    this.PriceTicket = Number(this.Ticket) * this.Rank;
    this.ticketmovie.imgticket = this.imgmovie
    this.ticketmovie.namemovie = this.moviename
    this.ticketmovie.typeticket = this.Rank
    this.ticketmovie.totalticket = this.Ticket
    this.ticketmovie.timemovie = this.time
    this.ticketmovie.totalprice = this.PriceTicket
    this.ticketmovie.ticketstatus = true
  }
  bookingmovie() {
    const lol = this.toastCtal.create({
      message: "กรุณากรอกให้ครบ",
      duration: 2000
    });
    const out = this.toastCtal.create({
      message: "ตั๋วที่มีอยู่ไม่เพียงพอ",
      duration: 2000
    });
    const AlertTotal = this.alrertCtrl.create({
      title: 'แจ้งเตือน',
      message: 'ยืนยันการทำรายการ',
      buttons: [
        {
          text: "ยกเลิก",
          handler: () => {
            console.log('Disagree Clicked')
          }
        },

        {
          text: "ยืนยัน",
          handler: () => {
            console.log('Agree Cliked')
            console.log(this.ticketmovie.totalticket);
            console.log(this.totalticket);
            console.log(this.idmovie);
            console.log(this.Ticket);
            if (this.ticketmovie.totalticket <= this.totalticket) {
              this.conncetAPI.createticket(this.ticketmovie.Iduser, this.ticketmovie).subscribe(data => {
              });
              this.conncetAPI.cuttotailticket(this.idmovie, this.Ticket).subscribe(data => {
              });
              this.navCtrl.setRoot(TicketPage);
            }
            else {
              if (this.ticketmovie.totalticket! > this.totalticket) {

                out.present();
              }
            }
          }
        }
      ]
    });
    if (this.ticketmovie.typeticket == null, this.ticketmovie.totalticket == null, this.ticketmovie.timemovie == null) {
      lol.present();
    }
    else {
      AlertTotal.present();
      console.log(this.ticketmovie);
    }
  }
}




