import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';

/**
 * Generated class for the SpotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spot',
  templateUrl: 'spot.html',
})
export class SpotPage {
  public spot;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,private usersProvider: UsersProvider) {
    this.spot = navParams.get("spot");

 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpotPage');
  }

}
