import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popoverpage';
import { Geolocation } from '@ionic-native/geolocation';
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

    google: any;

   @ViewChild('map') mapElement: ElementRef;
    map: any;
    // markerMyPosition: Array<{lat: Number, long: Number}>;
    lat: Number;long: Number

  constructor(public navCtrl: NavController, public navParams: NavParams , public popoverCtrl : PopoverController, public geolocation: Geolocation) {
  }

  exibirInformacoes(myEvent){
     let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    
  
     this.geolocation.getCurrentPosition().then((data) => {
            console.log('My latitude : ', data.coords.latitude);
            console.log('My longitude: ', data.coords.longitude);
            // this.markerMyPosition = [
            //   {lat:data.coords.latitude , long:data.coords.longitude}
            // ]
            this.lat = data.coords.latitude ;this.long = data.coords.longitude
        });

  }

  // addMarker(){
  
  //   let marker = new google.maps.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     position: this.map.getCenter()
  //   });
  
  //   let content = "<h4>Information!</h4>";          
  
  //   this.addInfoWindow(marker, content);
  
  // }
  // addInfoWindow(marker, content){
  
  //   let infoWindow = new google.maps.InfoWindow({
  //     content: content
  //   });
  
  //   google.maps.event.addListener(marker, 'click', () => {
  //     infoWindow.open(this.map, marker);
  //   });
  
  // }

}
