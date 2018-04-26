import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { RegistarPage } from '../registar/registar';
import { UsersProvider } from './../../providers/users/users';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;
  success: boolean;
  disableButton;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private usersProvider: UsersProvider) {
    this.model = new User();
  }

  public createAccount() {
    this.navCtrl.push(RegistarPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //this.navCtrl.push(HomePage);
    this.disableButton = true;

    this.usersProvider.login(this.model.email,this.model.password)
      .then((result: any) =>{
        if (result.success == "false"){
          this.toast.create({message: 'Credênciais Inválidas ', position: 'botton', duration: 3000}).present();
        }else{
          this.getAllSpots();
          this.usersProvider.utilizador = result.user;
          this.toast.create({message: 'Bem vindo ' + this.usersProvider.utilizador.email, position: 'botton', duration: 3000}).present();
          this.navCtrl.push(HomePage);

        }
        this.disableButton = false;
      })
      .catch((error:any )=>{
        this.toast.create({message: 'Error ao autenticar ' + error.error, position: 'botton', duration: 1500}).present();
        this.disableButton = false;
      })

  }

  getAllSpots(){
    this.usersProvider.getAllSpots()
    .then((result: any) =>{
      if (result.success == "true"){
        console.log("sucesso");
        this.usersProvider.spots =  result.spots;
      }else{
        console.log("falhou");
      }
    })
    .catch((error:any )=>{
      console.log("error");
    })
  }

  
}

export class User{
  email: string;
  password: string;
}
