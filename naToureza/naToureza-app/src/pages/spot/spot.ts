import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

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
	active:string = 'info';
	show: boolean = true;
  @ViewChild('slides') slides: Slides;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //spot: SpotPage = new SpotPage();
  changeSegment(value:string) {
  	this.active = value;
  }

  next() {
  	this.slides.slideNext();
  }

  prev() {
  	this.slides.slidePrev();
  }

  getIndex() {
  	return this.slides.getActiveIndex()+1;
  }

  getTotal() {
  	//console.log(this.slides.length());
  	return this.slides.length();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpotPage');
  }


}
