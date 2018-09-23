import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedInPage } from '../logged-in/logged-in';
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

  @ViewChild('uname') user;
  @ViewChild('pass') password;

  constructor(private alertctr:AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertctr.create({
      title: 'Login Status',
      subTitle: message,
      buttons: ['OK!']

    }).present();



  }


  SignInUser(){

    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
    .then(data=>{
      console.log('Got someting', data);
      this.alert('Yo logged-in Successfully');
      this.navCtrl.setRoot(LoggedInPage);

    })

    .catch(error=>{
      console.log('something is wrong',error);

      this.alert(error.message);

    }
    )
    
    console.log('login with ',this.user.value,this.password.value);
    }
}
