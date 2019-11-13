import { DateTime } from "ionic-angular";

export class MovieModel {
    _id: string;
    iduser: string;
    img: string = null;
    faculty: string = null;
    showtime: string = null;
    namemovie: string = null;
    datemovie: DateTime = null;
    ticketvip: Number ;
    ticketnomal: Number ;
    totalticket: string = null;
    detailmovie: string = null;
}