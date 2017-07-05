import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CadastroPostoPage } from '../pages/cadastro-posto/cadastro-posto';
import { MapaPage } from '../pages/mapa/mapa';


import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  

  pages: Array<{title: string, component: any , icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen , public afAuth : AngularFireAuth) {

    const authObserver = afAuth.authState.subscribe( user => {
      if (user) {
        this.rootPage = MapaPage;
        authObserver.unsubscribe();
      }else{
        this.rootPage = LoginPage;
        authObserver.unsubscribe();
      }
    })
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'PROCURAR POSTO', component: HomePage , icon:'lupa-01'},
      { title: 'MEU PERFIL', component: HomePage , icon:'perfil-pequeno'},
      { title: 'CONFIGURAÇÕES', component: HomePage , icon:'configuracoes-01'},
      { title: 'FAVORITOS', component: HomePage , icon:'favoritos'},
      { title: 'LISTA', component: ListPage , icon:'meu-rendimento'},
      { title: 'CADASTRO', component: CadastroPostoPage , icon:'mensagem'},
      { title: 'MAPA', component: MapaPage , icon:'sobre'},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
      // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
