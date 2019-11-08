import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { HometicketPage } from '../pages/hometicket/hometicket';
import { MovietimebookingPage } from '../pages/movietimebooking/movietimebooking';
import { MovietimebookingPageModule } from '../pages/movietimebooking/movietimebooking.module';
import { TestProvider } from '../providers/test/test';
import { UserPage } from '../pages/user/user';
import { TicketPage } from '../pages/ticket/ticket';
import { ConnectApiProvider } from '../providers/connect-api/connect-api';
import { DetailmoviePage } from '../pages/detailmovie/detailmovie';
import { AddmoviePage } from '../pages/addmovie/addmovie';

// import { LoginNavbarComponent } from '../components/login-navbar/login-navbar';
// import { AuthService } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    HometicketPage,
    DetailmoviePage,
    MovietimebookingPage,
    TicketPage,
    UserPage,
    AddmoviePage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    HometicketPage,
    MovietimebookingPage,
    DetailmoviePage,
    TicketPage,
    UserPage,
    AddmoviePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    TestProvider,
    ConnectApiProvider

  ]
})
export class AppModule { }
