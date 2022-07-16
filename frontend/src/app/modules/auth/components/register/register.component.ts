import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userModel:any={}
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.signUp(this.userModel).subscribe((res:any)=>{
        console.log('registered user',res)
        this.userModel={}
    })
  }

} 
