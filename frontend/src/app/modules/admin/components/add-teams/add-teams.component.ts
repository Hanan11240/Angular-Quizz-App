import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.scss']
})
export class AddTeamsComponent implements OnInit {
teams:any=[]
member:any={}
quizId:any={}
teamData:any={}
team:any={}
maxTeams:any=2
count:any=0
totalQuizzes:any=[]
quizData:any={}
matchedDocument:any




  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getOrganizationQuizzes()
  }

  addTeam(){
    
    if(this.count<2){
 

      const members=Object.values(this.member)
      this.teamData.quizId =this.quizId
      this.team.members=members
      this.teams.push(this.team)
      this.teamData.teams=this.teams
      console.log('team',this.teamData)
      this.member={}
      this.quizData={}
      this.quizId={}
      this.team={}
      this.count++
   
    }else{
      Swal.fire(` maximum teams can be upto ${this.maxTeams}`)
    }
 
    
  } 

  submitTeam(){
    this.adminService.addTeam(this.teamData).subscribe((res:any)=>{
      console.log('team added ',res)
     
     
    })
  }


  getOrganizationQuizzes(){
    this.adminService.getOrganizationQuizzes().subscribe((res:any)=>{
      console.log('res----->',res)
      this.totalQuizzes=res

    })
   }


   getquizId(){
   this.matchedDocument= this.totalQuizzes.find((element:any)=> element.organizationName== this.quizData.organizationName && element.eventName==this.quizData.eventName)
  console.log('match',this.matchedDocument)
  this.quizId= this.matchedDocument._id
  }


  
}
