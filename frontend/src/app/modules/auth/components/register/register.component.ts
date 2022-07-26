import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userModel:any={}
  organizations:any=[]
  organizationData:any={}
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.getOrganizations()
    this.getAllOrganizations()
  }

  signUp(){
   this.organizations.find((element:any)=>{
      if(element.organizationName== this.organizationData.organizationName){
        this.userModel.organizationId = element._id
      }
   })
this.organizationData={}
   console.log('userModel',this.userModel)

    this.authService.signUp(this.userModel).subscribe((res:any)=>{
        console.log('registered user',res)
        this.userModel={}
    },(error:any)=>{
      Swal.fire(error.error.message)
    },()=>{
      
    })

    
  }

  getAllOrganizations(){
      this.authService.getAllOrganizations().subscribe((res:any)=>{
        console.log('all organization',res)
      })
  }


  getOrganizations(){
    this.authService.getOrganizations().subscribe((res)=>{
      console.log('res organization',res)
      this.organizations=res
      console.log('organizations',this.organizations)
    })
  }
} 
