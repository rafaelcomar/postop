import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../../pages/popoverpage';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

import {PostoServiceProvider} from '../../providers/posto-service/posto-service' ;
/**
 * Generated class for the MapaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google : any;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

    @ViewChild('map') mapElement;
   
    map: any;
    // markerMyPosition: Array<{lat: Number, long: Number}>;
    lat: Number;
    long: Number;

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams , public popoverCtrl : PopoverController, public geolocation: Geolocation ,private googleMaps: GoogleMaps,
  public postoServiceProvider : PostoServiceProvider) {
  //   platform.ready().then(() => {
  //   this.loadMap();
  // });
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
    this.initMap();
  }
  initMap(){
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMarkersPostos();
 
    }, (err) => {
      console.log(err);
    });
  }

  addMarker(latLng){   
    var image = '../../assets/icon/posto4.png';
    var beachMarker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          icon: image,
          animation: image,
        });
  
    let content = "<div> </div>";          
  
    // this.addInfoWindow(marker, content);
  }
  addInfoWindow(marker, content){
 
    // let infoWindow = new google.maps.InfoWindow({
    //   content: ''
  
    // });
  
    // google.maps.event.addListener(marker, 'click', (myEvent) => {
    //   let popover = this.popoverCtrl.create(PopoverPage);
    //   popover.present({
    //      ev: myEvent
    //   });
    // });
 
  }
  addMarkersPostos(){
    this.postoServiceProvider.getLatLongs().subscribe(
    (res) => {
      var lat;
      var long;
      for(let key of Object.keys(res)){
        lat = res[key].latitude,
        long = res[key].longitude

        let latLng = new google.maps.LatLng( lat , long); 
        var image = '../../assets/icon/posto4.png';
        var beachMarker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          icon: image,
          animation: image,
        });
      }   
                  // this.items = res;
    },
    (err) => {
      alert("Falha!");
    }
    )
  }

  // exibirInformacoes(marker){
  //    let popover = this.popoverCtrl.create(PopoverPage);
  //     popover.present({
  //       // ev: marker
  //     });
  // }
  

}
