import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HometicketPage } from '../hometicket/hometicket';
import { TicketPage } from '../ticket/ticket';
import { UserPage } from '../user/user';

/**
 * Generated class for the MovietabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movietab',
  templateUrl: 'movietab.html'
})
export class MovietabPage {
  
  public tab1;
  public tab2;
  public tab3;
  homeRoot = 'HomePage'
  ticketRoot = 'TicketPage'
  userRoot = 'UserPage'


  constructor(public navCtrl: NavController) {
    this.tab1 = HometicketPage;
    this.tab2 = TicketPage;
    this.tab3 = UserPage;
  }

}
