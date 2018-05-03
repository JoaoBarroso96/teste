import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ViewChild} from '@angular/core';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
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
        'username': ['', Validators.required],
        'password': ['', Validators.required],
        'password_confirm': ['', Validators.required]
      }, {validator: RegisterPage.passwordsMatch});    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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

  createAccount(){
    this.usersProvider.createAccount(this.model.email,this.model.password,this.model.username)
      .then((result: any) =>{
        if (result.token != undefined){
          this.toast.create({message: 'Utilizar criado com sucesso', position: 'botton', duration: 3000}).present();
          this.navCtrl.push('LoginPage');
        }else{
          if (result.error == 1){
            this.toast.create({message: 'Username já existe', position: 'botton', duration: 3000}).present();
            var input = document.getElementById('ion-username');
            input.removeAttribute("ng-touched");
            input.classList.remove('ng-valid');
            input.classList.add('ng-invalid');
            input.classList.remove('ng-untouched');
            input.classList.add('ng-touched');

          }else{
            this.toast.create({message: 'Email já existe', position: 'botton', duration: 3000}).present();
            var input = document.getElementById('ion-email');
            input.removeAttribute("ng-touched");
            input.classList.remove('ng-valid');
            input.classList.add('ng-invalid');
            input.classList.remove('ng-untouched');
            input.classList.add('ng-touched');
          }

        }
      
      })
      .catch((error:any )=>{
        this.toast.create({message: 'Erro ao ligar ao servidor', position: 'botton', duration: 3000}).present();
        
      })
  }

  openLogin() {
    console.log("aaa");

    this.navCtrl.push('LoginPage');
  }

}

export class User{
  username: string;
  email: string;
  password: string;
}
