import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/UsersModel';
import { Http } from '@angular/http';
import { MovieModel } from '../../models/MovieModel';
import { TicketModel } from '../../models/TicketModel';

/*
  Generated class for the ConnectApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectApiProvider {
  user: any;
  movieM: any;
  ticket: any;

  constructor(public http: HttpClient) {
    console.log('Hello ConnectApiProvider Provider');
  }
  //-------- User ---------
  //-------- New User ---------
  public creatUser(item: UserModel) {
    return this.http.post("https://localhost:5001/api/User/CreateUser", item);
  }
  //-------- Edit User ---------
  public edituser(edituser) {
    return this.http.put("https://localhost:5001/api/User/Edituser", edituser);
  }
  //--------- test api ---------
  public test() {
    return this.http.get<UserModel>("https://localhost:5001/api/User/GetAllUser");
  }
  public getId(Id: string) {
    return this.http.get<UserModel>("https://localhost:5001/api/User/getById/" + Id)
  }
  //-------login --------
  public login(userName: string, pass: string) {
    return this.http.get("https://localhost:5001/api/User/Login/" + userName + "/" + pass);
  }

  //---------- movie --------------
  //-------- getmovie ----------
  public movie() {
    return this.http.get<MovieModel>("https://localhost:5001/api/Movie/GetAllMovie");
  }
  public getIDmovie(Id: string) {
    return this.http.get<MovieModel>("https://localhost:5001/api/Movie/getbyID/" + Id);
  }
  //------ createmovie -------
  public createmovie(createmovie: MovieModel) {
    return this.http.post("https://localhost:5001/api/Movie/Createmovie", createmovie);
  }

  //----- delmovie --------
  public delmovie(Id: string) {
    return this.http.delete("https://localhost:5001/api/Movie/deleteMovie" + Id);
  }

  //--------- ticket -----------
  //-------- createticket -------
  public createticket(id: string, ticketmovie: TicketModel) {
    return this.http.post("https://localhost:5001/api/Ticket/Createticket/" + id, ticketmovie);
  }
  public cuttotailticket(id: string, totailticket: Number) {
    return this.http.post("https://localhost:5001/api/Ticket/BuyTicket/" + id + "/" + totailticket, null)
  }
  //-------- getticket ---------
  public getallticket() {
    return this.http.get("https://localhost:5001/api/Ticket/GetAllTicket");
  }
  public getByidTicket(iduser: string) {
    return this.http.get("https://localhost:5001/api/Ticket/getbyID/" + iduser);
  }
  //-------- use ticket ---------
  public useticket(id: string, ) {
    return this.http.post("https://localhost:5001/api/Ticket/UseTicket", id)
    //https://localhost:5001/api/Ticket/UseTicket/c5c8d80b-3e7b-4fa6-aa90-0cabaf447258
  }
}