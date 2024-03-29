import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any
  serverUrl=environment.serverURL
  constructor(private http:HttpClient) { }


  signUp(userModel:any){
     this.user = this.http.post(`${this.serverUrl}user/register`,userModel)
     return this.user
  }

  login(authModel:any){
    return this.http.post(`${this.serverUrl}user/login`,authModel)
  }

  getAllOrganizations(){
    return this.http.get(`${this.serverUrl}quiz/get-all-organizations`)
  }

  getOrganizations(){
    return this.http.get(`${this.serverUrl}organization/get-organizations`)
  }
}
 