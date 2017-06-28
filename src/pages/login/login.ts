import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuthModule } from 'angularfire2/auth';
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
  constructor(public navCtrl: NavController, public navParams: NavParams , public auth : AuthServiceProvider) {
  }

  registerUser(){
    this.auth.signupUser(this.user.email , this.user.password).then().catch((error) => {
      alert(error);
    });
  }

  login(){
    this.auth.loginUser(this.user.email , this.user.password).then(
    (authData) => {
      alert(JSON.stringify(authData));
      this.navCtrl.setRoot(HomePage);
    }
    ).catch((error) => {
      alert(error);
    });
  }
  logout(){
    this.auth.logoutUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
