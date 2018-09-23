import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('user') Name;

  constructor(private alertctr:AlertController, private fire:AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  alert(message: string){
    this.alertctr.create({
      title: 'Registration Status',
      subTitle: message,
      buttons: ['OK!']

    }).present();
  }
  Signupuser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
    .then(data=>{
      console.log('have data',data);
      this.alert('You have successfully Registered');
     
    //this.fire.auth.currentUser.updateProfile({displayName:this.Name,photoURL:""}).then();
    //console.log(this.fire.auth.currentUser.displayName);
    })
    .catch(error=>{

      console.log('found error',error);
      this.alert(error.message);
    })
    console.log(this.user.value,this.password.value);

  }
  
}
