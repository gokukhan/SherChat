import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
//import { map } from 'rxjs/operators';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LoggedInPage } from '../pages/logged-in/logged-in';
import { SignupPage } from '../pages/signup/signup';

const firebaseAuth={
  apiKey: "AIzaSyAnT3jYS03-m3CojVbnm_bEEZSUnieuYJQ",
  authDomain: "racchat-3f402.firebaseapp.com",
  databaseURL: "https://racchat-3f402.firebaseio.com",
  projectId: "racchat-3f402",
  storageBucket: "racchat-3f402.appspot.com",
  messagingSenderId: "123122017712"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    LoggedInPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    LoggedInPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
