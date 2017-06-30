import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostoServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PostoServiceProvider Provider');
  }

  createPosto(posto : {nome, endereco , longitude  , latitude , gasolina, alcool , diesel }){
    return this.http.post("https://postop-d7aac.firebaseio.com/postos.json" , posto);
  }

  retrieveAll(){
    return this.http.get("https://postop-d7aac.firebaseio.com/postos.json").map(
      (res) => {
        let responseObject = res.json();
        let postos : Array<{key: string , nome: string , gasolina: string}> = [];
        for(let key of Object.keys(responseObject)){
          postos.push({
            key: key,
            nome: responseObject[key].nome,
            gasolina : responseObject[key].gasolina

          })
        }
        return postos;
      });
  }
}
