import { Component,OnInit } from '@angular/core';
import { AuthService } from './modules/auth/services/auth.service';
import { DataServiceService } from './data-service.service';
import { Router } from '@angular/router';

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
 constructor(private authService:AuthService, private dataService:DataServiceService,private router:Router){

 }
 
 
 
  logout(){
    localStorage.clear()
    window.location.reload();
    this.router.navigate(['/authenticate'])
  }
checkRole(){
  this.opened=!this.opened
  this.userDetails= this.dataService.getUserData()
  console.log('userDeatails',this.userDetails)
  this.role= this.userDetails[0]?.role
  console.log('role',this.role)
}

}
