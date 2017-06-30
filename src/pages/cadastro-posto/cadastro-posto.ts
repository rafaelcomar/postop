import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import {PostoServiceProvider} from '../../providers/posto-service/posto-service' ;


/**
 * Generated class for the CadastroPostoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro-posto',
  templateUrl: 'cadastro-posto.html',
})
export class CadastroPostoPage {

  posto = {nome: '' , endereco: '' , longitude : '' , latitude : '' , gasolina: '' , alcool:'' , diesel : '' }

  constructor(public navCtrl: NavController, public navParams: NavParams , public postoService : PostoServiceProvider ,  private alertCtrl : AlertController) {

  }

  cadastrar(){
    this.postoService.createPosto(this.posto).subscribe(
      () => {
        
        this.alertCtrl.create({
          title : 'Confirmar',
          message: "Posto cadastrado com sucesso.",
          buttons : [
            {
              text: 'Ok',
              role: 'cancel',
            }
          ]
         });
      },
      (err) =>{
        this.alertCtrl.create({
          title : 'Erro',
          message: "Erro ao cadastrar o posto.",
          buttons : [
            {
              text: 'Ok',
              role: 'cancel',
            }
          ]
         });                      
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPostoPage');
  }

}
