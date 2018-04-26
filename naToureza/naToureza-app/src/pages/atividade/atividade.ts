import { SelectSpotPage } from './../select-spot/select-spot';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';
/**
 * Generated class for the AtividadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atividade',
  templateUrl: 'atividade.html',
})
export class AtividadePage {

  public ilha:string;
  public categoria:string;
  public spots;

  public atividades: any = [];
  private allatvs: any = [];
  public atv;

  constructor(public navCtrl: NavController, public navParams: NavParams,private usersProvider: UsersProvider) {
    this.ilha = navParams.get("ilha");
    this.categoria = navParams.get("categoria");
    this.spots = this.usersProvider.spots;

    for(let data of this.spots) {
      if (data['ilha'] == this.ilha && data['categoria'] == this.categoria){
        if (this.allatvs.includes(data['nomeAtv']) == false){
          this.atv = {
            "atividade": data['nomeAtv']
          };
          this.atividades.push(this.atv);
          this.allatvs.push(data['nomeAtv']);
        }
      }
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadePage');
  }

  
  openSpots(atividade:string){
    for(let data of this.spots) {
      if (data['nomeAtv'] == atividade){
        if (data['hasSpot'] == true){
          this.navCtrl.push(SelectSpotPage,{
            ilha: this.ilha,
            atividade: atividade,
          });
        }else{
          console.log("Sem Spot concreto");
        }
        break;
      }
    }
  }

}
