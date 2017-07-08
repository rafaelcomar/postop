import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostoServiceProvider {

  constructor(public http: Http , public db : AngularFireDatabase) {
    console.log('Hello PostoServiceProvider Provider');
  }

  createPosto(posto : {nome, endereco , longitude  , latitude , gasolina, alcool , diesel }){
    return this.http.post("https://postop-d7aac.firebaseio.com/postos.json" , posto);
  }

  retrieveAll(){

    return this.db.list('/postos');
  }

  getLatLongs(){
        return this.http.get("https://postop-d7aac.firebaseio.com/postos.json").map(
      (res) => {
        let responseObject = res.json();
        let postos : Array<{key: string , nome: string , latitude: string, longitude: string }> = [];
        
        var dist = 1.2;
        for(let key of Object.keys(responseObject)){
          
          dist += Math.floor((Math.random() * 10) + 1) * 0.1;
          postos.push({
            key: key,
            nome: responseObject[key].nome.toUpperCase(),
            latitude : responseObject[key].latitude,
            longitude : responseObject[key].longitude
            

          })
        }
        return postos;
      });
  }
}
