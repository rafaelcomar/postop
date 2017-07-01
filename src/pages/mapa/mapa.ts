import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popoverpage';
/**
 * Generated class for the MapaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , public popoverCtrl : PopoverController) {
  }

  exibirInformacoes(myEvent){
     let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

}
