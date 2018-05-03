import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {
  public utilizador: any;
  public spots: any;

  //private API_URL = 'https://reqres.in/api/';
  //private API_URL = 'http://localhost:8080/naToureza/public/api';
  private API_URL = 'http://www.fundodemaneio.com/natoureza/testes/public/api';

  constructor(public http: Http) {}

  createAccount(email: string, password: string, username: string){
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        username: username,
        password: password
      };
      console.log(data);
      /*let headers = new Headers(
        {
          'Content-Type' : 'application/json'
        });*/
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept','application/json');
        headers.append('content-type','application/json');

      let options = new RequestOptions({ headers: headers });

      this.http.post(this.API_URL + "/user", data, options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  updateProfile(firstName: string, lastName: string,genero: string,residente: boolean,birthday: String,nacionalidade: string){
    return new Promise((resolve, reject) => {
      var data = {
        id: this.utilizador.id,
        firstName: firstName,
        lastName: lastName,
        genero: genero,
        residente: residente,
        birthday: birthday,
        nacionalidade: nacionalidade
      };

      let headers = new Headers(
        {
          'Content-Type' : 'application/json'
        });
      let options = new RequestOptions({ headers: headers });

      this.http.put(this.API_URL + "/user/updateUser", data, options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  login(email: string, password:string ){
    console.log(email);
    return new Promise((resolve,reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + '/user/login', data)
        .subscribe((result:any) => {
          resolve(result.json());
        },  
        (error) => {
          reject(error.json());
        })
    });
  }

  getAllSpots(){
    return new Promise((resolve,reject) => {

      let url = this.API_URL + '/atividades/allSpots';
      this.http.get(url)
        .subscribe((result:any) => {
          resolve(result.json());
        },  
        (error) => {
          reject(error.json());
        })
    });
  }

  getAll(page: number){
    return new Promise((resolve,reject) => {

      let url = this.API_URL + 'users?per_page=10&page=' + page;

      this.http.get(url)
        .subscribe((result:any) => {
          resolve(result.json());
        },  
        (error) => {
          reject(error.json());
        })
    });
  }

}
