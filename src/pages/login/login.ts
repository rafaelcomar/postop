import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { HomePage } from '../home/home';

 /**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {email : "" , password : ""}
  logado = false;

  constructor(public navCtrl: NavController, public navParams: NavParams , public auth : AuthServiceProvider , public afAuth : AngularFireAuth) {
    const authObserver =  afAuth.authState.subscribe( user => {
      if (user) {
        this.logado = true;
        
        authObserver.unsubscribe();
      }else{
        authObserver.unsubscribe();
      }
    });
  }

  registerUser(){
    this.auth.signupUser(this.user.email , this.user.password).then(
      (authData) => {
        this.logado = true;
        alert("Usuario cadastrado com sucesso.");
        
      }
    ).catch(
      (error) => {
      alert(error);
    });
  }

  login(){
    this.auth.loginUser(this.user.email , this.user.password).then(
    (authData) => {
      this.logado = true;
      //alert(JSON.stringify(authData));
      this.navCtrl.setRoot(HomePage);
    }
    ).catch((error) => {
      alert("Usuário ou senha incorretos.");
    });
  }
  logout(){
    this.auth.logoutUser().then(
      (authData) => {
        this.logado = false;
        alert('usuario deslogado');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
