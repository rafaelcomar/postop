import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CadastroPostoPage } from '../pages/cadastro-posto/cadastro-posto';
import { MapaPage } from '../pages/mapa/mapa';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { PostoServiceProvider } from '../providers/posto-service/posto-service'; 
import { HttpModule } from '@angular/http';

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
    MapaPage
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
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroPostoPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    PostoServiceProvider
  ]
})
export class AppModule {}
