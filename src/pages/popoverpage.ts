import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


/**
 * Generated class for the MapaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  template: `
    <ion-card class="myStyleCard">
        <img src="../../assets/img/posto-jg.jpg" />
        <ion-card-content>
            <ion-card-title>
            Posto Ipiranga da Washington Soares
            </ion-card-title>
            <p>
                <b>Gasolina</b> : R$ 3,89 <br>
                <b>Gasolina Aditivada</b> : R$ 3,99 <br>
                <b>Alcool</b> : R$ 2,89 <br>
                <b>Diesel</b> : R$ 3,33 <br>

            </p>
        </ion-card-content>
    </ion-card>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}