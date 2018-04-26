
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { RegistarPage } from '../pages/registar/registar';
import { ProfilePage } from '../pages/profile/profile';
import { SelectIlhaPage } from '../pages/select-ilha/select-ilha';
import { AtividadePage } from '../pages/atividade/atividade';
import { SelectSpotPage } from './../pages/select-spot/select-spot';
import { CategoriaPage } from './../pages/categoria/categoria';
import { SpotPage } from '../pages/spot/spot';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Registar', component: RegistarPage },
      { title: 'Ilha', component: SelectIlhaPage },
      { title: 'Categoria', component: CategoriaPage },
      { title: 'Atividade', component: AtividadePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Spot', component: SpotPage },
      { title: 'Spots', component: SelectSpotPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
