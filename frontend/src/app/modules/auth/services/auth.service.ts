import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl=environment.serverURL
  constructor(private http:HttpClient) { }


  signUp(userModel:any){
    return this.http.post(`${this.serverUrl}user/register`,userModel)
  }

  login(authModel:any){
    return this.http.post(`${this.serverUrl}user/login`,authModel)
  }

  getAllOrganizations(){
    return this.http.get(`${this.serverUrl}quiz/get-all-organizations`)
  }
}
 