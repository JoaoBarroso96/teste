import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IslandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-islands',
  templateUrl: 'islands.html',
})
export class IslandsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tab1:any='Profile';
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IslandsPage');
  }

  onClick(ilha: string) {
    this.navCtrl.push('TypePage',{
      ilha: ilha,
    });
  }




}
