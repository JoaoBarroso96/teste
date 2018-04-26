import { CategoriaPage } from './../categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SelectIlhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-ilha',
  templateUrl: 'select-ilha.html',
})
export class SelectIlhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  public openCategoria(ilha: string) {
    this.navCtrl.push(CategoriaPage,{
      ilha: ilha,
    });
  }

}
