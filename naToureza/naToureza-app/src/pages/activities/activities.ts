import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html'
})

export class ActivitiesPage {
	test: boolean = false;
	shownGroup = null;
	activities = [
  	{title: "Trails", places: ["Lagoa das Sete Cidades","Lagoa do Congro","Lagoa das Furnas"]},
  	{title: "Trails", places: ["Lagoa das Sete Cidades","Lagoa do Congro","Lagoa das Furnas"]},
  	{title: "Trails", places: ["Lagoa das Sete Cidades","Lagoa do Congro","Lagoa das Furnas"]},
  	];	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleGroup(group) {
  	if(this.isGroupShown(group)){
  		this.shownGroup = null;
  		
  	} else {
  		this.shownGroup = group;
  		
  	}

  };

  isGroupShown(group) {
  	return this.shownGroup === group;
  }

  openPage(){
  	this.navCtrl.push('TypePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

 }




