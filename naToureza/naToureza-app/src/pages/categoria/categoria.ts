import { AtividadePage } from './../atividade/atividade';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';
import { List } from 'ionic-angular/components/list/list';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  public ilha:string;
  public spots;
  public categorias: any = [];
  private allCats: any = [];
  public cat;

  constructor(public navCtrl: NavController, public navParams: NavParams,private usersProvider: UsersProvider) {
    this.ilha = navParams.get("ilha");
    this.spots = this.usersProvider.spots;

    for(let data of this.spots) {
      if (data['ilha'] == this.ilha){
        if (this.allCats.includes(data['categoria']) == false){
          this.cat = {
            "categoria": data['categoria']
          };
          this.categorias.push(this.cat);
          this.allCats.push(data['categoria']);
        }
      }
    }
    
  }

  ionViewDidLoad() {
  }

  openAtividade(categoria:string){
    this.navCtrl.push(AtividadePage,{
      ilha: this.ilha,
      categoria: categoria,
    });
  }

}

export class Categoria{
  nome: string;
}
