import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CadastroPostoPage } from '../pages/cadastro-posto/cadastro-posto';
import { MapaPage } from '../pages/mapa/mapa';
import { PopoverPage } from '../pages/popoverpage';
import { Network } from '@ionic-native/network';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { PostoServiceProvider } from '../providers/posto-service/posto-service'; 
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsClusterProvider } from '../providers/google-maps-cluster/google-maps-cluster';

export const firebaseConfig = {
   apiKey: "AIzaSyDnHIs7R_LqH7ynGo5YBwQXpWQ3N2sd-sg",
    authDomain: "postop-d7aac.firebaseapp.com",
    databaseURL: "https://postop-d7aac.firebaseio.com",
    projectId: "postop-d7aac",
    storageBucket: "postop-d7aac.appspot.com",
    messagingSenderId: "610223926188"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroPostoPage,
    MapaPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAXZRVuN6HrhOj0Vq6v-zvyYbRKZV-YObo'
    }),
    HttpModule,
    Network
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroPostoPage,
    MapaPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    PostoServiceProvider,
    Geolocation,
    GoogleMapsProvider,
    ConnectivityProvider,
    GoogleMapsClusterProvider
  ]
})
export class AppModule {}
