import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';
import { SpotPage } from '../spot/spot';

/**
 * Generated class for the SelectSpotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-spot',
  templateUrl: 'select-spot.html',
})
export class SelectSpotPage {

  public ilha:string;
  public atividade:string;
  public spots;

  public data: any = [];
  public spot;


  constructor(public navCtrl: NavController, public navParams: NavParams,private usersProvider: UsersProvider) {
    this.ilha = navParams.get("ilha");
    this.atividade = navParams.get("atividade");
    this.spots = this.usersProvider.spots;

    for(let data of this.spots) {
      if (data['ilha'] == this.ilha && data['nomeAtv'] == this.atividade){
          this.spot = {
            "nome": data['nome'],
            "id": data['id_spot']
          };
          this.data.push(this.spot);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectSpotPage');
  }

  openSpot(id:string){
    this.navCtrl.push(SpotPage,{
      spot: this.findSpot(id),
    });
  }

  private findSpot(id:string){
    for(let data of this.spots) {
      if (data['id_spot'] == id){
        return data;
      }
    }
  }


}
