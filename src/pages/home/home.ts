import { Component} from '@angular/core';
import { NavController ,AlertController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-Home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  }
Signin(){
    //console.log(this.user.value , this.password.value);
    this.navCtrl.push(LoginPage);
    /*const alert = this.alertCtrl.create({
      title: 'Login Success!',
      subTitle: 'You have loged in success fully !'+this.user.value,
      buttons: ['OK']
    });
    alert.present();*/
  
}
Register(){

  this.navCtrl.push(SignupPage);
}
}
