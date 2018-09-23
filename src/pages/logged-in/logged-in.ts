import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

/**
 * Generated class for the LoggedInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logged-in',
  templateUrl: 'logged-in.html',
})
export class LoggedInPage {

  username: string = '';
  message: string = '';
  Name: string='';
  s;
  messages: object[]=[];
  items: Observable<any[]>;
  
  constructor(public db : AngularFireDatabase, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

    this.username=fire.auth.currentUser.email;
    this.Name=fire.auth.currentUser.displayName;
    console.log(this.Name);
    console.log(this.fire.auth.currentUser.displayName);

    this.items = db.list('/chat').valueChanges();
    //this.items =db.database('/chat');
    
  }

  sendMessage(){
     this.db.list('/chat').push({
    username: this.username,
    message: this.message
  }).then( () => {
    // message is sent
  });//.catch( () => {
    // some error. maybe firebase is unreachable
 // });
  this.message = '';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedInPage');
   
  }

}
