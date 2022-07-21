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
      console.log("logged in",res)
      const user = res
      console.log('user',user)
      const _id= user[0]._id
      console.log('user',_id)
     localStorage.setItem('userId',_id)
      this.authModel={}

      this.router.navigate(['/home'])
    })
  }

}
