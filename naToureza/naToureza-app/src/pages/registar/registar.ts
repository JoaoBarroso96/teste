import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-registar',
  templateUrl: 'registar.html',
})
export class RegistarPage {
  model: User;
  private registerForm : FormGroup;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private usersProvider: UsersProvider, private builder: FormBuilder) {

      this.model = new User();
      this.model.email = "";
      this.model.password = "";

      this.registerForm = this.builder.group({
        'email' : ['',Validators.compose([Validators.required])],
        'password': ['', Validators.required],
        'password_confirm': ['', Validators.required]
      }, {validator: RegistarPage.passwordsMatch});    
  }

  static passwordsMatch(cg: FormGroup): {[err: string]: any} {
    let pwd1 = cg.get('password');
    let pwd2 = cg.get('password_confirm');
    let rv: {[error: string]: any} = {};
    if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
      rv['passwordMismatch'] = true;
    }
    return rv;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistarPage');
  }

  createAccount(){
    this.usersProvider.createAccount(this.model.email,this.model.password)
      .then((result: any) =>{
        this.toast.create({message: 'Utilizar criado ' + result.token, position: 'botton', duration: 1500}).present();
      })
      .catch((error:any )=>{
        this.toast.create({message: 'Error ao criar utilizador ' + error.error, position: 'botton', duration: 1500}).present();
      })
  }

}

export class User{
  email: string;
  password: string;
}
