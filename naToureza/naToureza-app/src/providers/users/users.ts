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
  //private API_URL = 'https://reqres.in/api/';
  private API_URL = 'http://localhost:8080/naToureza/public/api/user';
  
  constructor(public http: Http) {}

  createAccount(email: string, password: string){
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      let headers = new Headers(
        {
          'Content-Type' : 'application/json'
        });
      let options = new RequestOptions({ headers: headers });

      console.log(data);

      this.http.post(this.API_URL, data, options)
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
    return new Promise((resolve,reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'login', data)
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
