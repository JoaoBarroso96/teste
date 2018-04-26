import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersProvider } from './../../providers/users/users';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  model: User;
  slideOneForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,private usersProvider: UsersProvider,
    private toast: ToastController, public camera: Camera) {
    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      genero: [''],
      birthday: [''],
      residente: [''],
      nacionalidade: [''],
    });

    this.model = new User();
    this.model.firstName = this.usersProvider.utilizador.firstname;
    this.model.lastName = this.usersProvider.utilizador.lastname;
    this.model.genero = this.usersProvider.utilizador.genero;
    this.model.residente = this.usersProvider.utilizador.residente;
    this.model.nacionalidade = this.usersProvider.utilizador.nacionalidade;
    this.model.nickname = this.usersProvider.utilizador.nickname;
    this.model.birthday = this.usersProvider.utilizador.birthday;

    console.log(this.model.birthday);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  save(){
    this.usersProvider.updateProfile(this.model.firstName,this.model.lastName,this.model.genero,
      this.model.residente,this.model.birthday,this.model.nacionalidade)
      .then((result: any) =>{
        if (result.success == "false"){
          this.toast.create({message: 'Error ao guardar', position: 'botton', duration: 3000}).present();
        }else{
          this.toast.create({message: 'Alterações efetuadas!', position: 'botton', duration: 3000}).present();

          this.usersProvider.utilizador = result.user;
        }
      })
      .catch((error:any )=>{
        this.toast.create({message: 'Error ao criar utilizador ' + error.error, position: 'botton', duration: 1500}).present();
      })
  }

  getPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.model.img = base64Image;
    }, (err) => {
     // Handle error
    });
  }

}

export class User{
  nickname: string;
  firstName: string;
  lastName: string;
  genero: string;
  residente: boolean;
  birthday: String = new Date().toISOString();
  nacionalidade: string;
  img: string;
}
