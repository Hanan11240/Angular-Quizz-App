import { Component,OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  opened:boolean=false
  role:any={}
  userDetails:any
  ngOnInit(): void {
  
  }
 constructor(private authService:AuthService, private dataService:DataServiceService){

 }
 
 
  logout(){
    localStorage.clear()
  }
checkRole(){
  this.opened=!this.opened
  this.userDetails= this.dataService.getUserData()
  console.log('userDeatails',this.userDetails)
  this.role= this.userDetails[0]?.role
  console.log('role',this.role)
}

}
