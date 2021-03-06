import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
authModel:any={}
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.authModel).subscribe((res:any)=>{
      // console.log("logged in",res)
      const user = res
      // console.log('userdata--------',user)

      const _id= user[0]._id
      const organizationName=user[0].organizationId?.organizationName
      console.log('organization name',organizationName)
     localStorage.setItem('userId',_id)
     localStorage.setItem('organizationName',organizationName)
      this.authModel={}

      this.router.navigate(['/home'])
    })
  }

}
