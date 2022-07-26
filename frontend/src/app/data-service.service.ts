import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

 

  userdetails:any={}
  constructor() { 
    this.userdetails={}
  }
  setUserData(val:any)
  {
    this.userdetails=val;
    console.log('this.userdetails',this.userdetails)
  }
    getUserData()
  {
    return this.userdetails;
  }
}
