import { SelectIlhaPage } from './../select-ilha/select-ilha';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private usersProvider: UsersProvider) {

    
  }

  public openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  public openSelectIsland() {
    this.navCtrl.push(SelectIlhaPage);
  }

}
