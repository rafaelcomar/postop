import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popoverpage';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
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
    lat: Number;
    long: Number;

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams , public popoverCtrl : PopoverController, public geolocation: Geolocation ,private googleMaps: GoogleMaps) {
    platform.ready().then(() => {
    this.loadMap();
  });
  }

  exibirInformacoes(myEvent){
     let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
    
    this.map = new GoogleMap('map');

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');
    });
  
    //  this.geolocation.getCurrentPosition().then((data) => {
    //         console.log('My latitude : ', data.coords.latitude);
    //         console.log('My longitude: ', data.coords.longitude);
    //         // this.markerMyPosition = [
    //         //   {lat:data.coords.latitude , long:data.coords.longitude}
    //         // ]
    //         this.lat = data.coords.latitude ;this.long = data.coords.longitude
    //     });
        
        

  }

  loadMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      console.log(resp.coords.latitude+", "+resp.coords.longitude);
      let location = new LatLng(resp.coords.latitude, resp.coords.longitude);

      this.map = new GoogleMap('map', {
        'backgroundColor': 'white',
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'latLng': location,
          'tilt': 30,
          'zoom': 15,
          'bearing': 50
        }
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        console.log('Map is ready!');
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
