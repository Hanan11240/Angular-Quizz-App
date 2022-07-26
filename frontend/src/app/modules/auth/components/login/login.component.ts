import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataServiceService } from 'src/app/data-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
authModel:any={}
  constructor(private authService:AuthService,private router:Router,private dataService:DataServiceService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.authModel).subscribe((res:any)=>{
      console.log("logged in",res)
      const user = res
      console.log('userdata--------',user)
        this.dataService.setUserData(user)
      const _id= user[0]._id
      const organizationName=user[0].organizationId?.organizationName
     
     
      console.log('organization name',organizationName)
     localStorage.setItem('userId',_id)
     localStorage.setItem('organizationName',organizationName)
      this.authModel={}

      this.router.navigate(['/home'])
    },error=>{
     
      Swal.fire(error.error.message)
    },()=>{

    })
  }

}
