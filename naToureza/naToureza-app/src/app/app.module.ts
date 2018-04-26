import { SelectSpotPage } from './../pages/select-spot/select-spot';

import { Camera } from '@ionic-native/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';
import { RegistarPage } from '../pages/registar/registar';
import { ProfilePage } from '../pages/profile/profile';
import { SelectIlhaPage } from './../pages/select-ilha/select-ilha';
import { AtividadePage } from './../pages/atividade/atividade';
import { CategoriaPage } from './../pages/categoria/categoria';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';

import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SpotPage } from '../pages/spot/spot';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistarPage,
    ListPage,
    ProfilePage,
    SelectIlhaPage,
    CategoriaPage,
    AtividadePage,
    SelectSpotPage,
    SpotPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistarPage,
    ListPage,
    ProfilePage,
    SelectIlhaPage,
    CategoriaPage,
    AtividadePage,
    SelectSpotPage,
    SpotPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    Camera
  ]
})
export class AppModule {}
