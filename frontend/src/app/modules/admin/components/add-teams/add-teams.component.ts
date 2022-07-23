import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-teams',
  templateUrl: './add-teams.component.html',
  styleUrls: ['./add-teams.component.scss']
})
export class AddTeamsComponent implements OnInit {
teams:any=[]
member:any
quizId:any
teamData:any={}
team:any={}
maxTeams:any=2
count:any=0
totalQuizzes:any=[]
quizData:any={}
matchedDocument:any
organizationName:any={}
teamInfo:any={}
createTeam:boolean=false
addedMember:number=0
members:any=[]
totalMembers:number=0




  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getOrganizationQuizzes()
    this.organizationName = localStorage.getItem('organizationName')
  }





  addTeamInfo(){
  this.teamData.quizId =this.quizId
    this.createTeam=true
     
  } 

  


  addMember(){
    if(this.member===''){
      Swal.fire('Member cannot be empty')
      return
    }
    this.totalMembers++
    this.members.push(this.member)
    if(this.totalMembers==1 && this.member== '')
    {
      console.log('totaol members',this.totalMembers)
      this.members.shift()
    }
   
    console.log('members',this.members)
    this.member=''

  }





  addTeam(){
    this.team.members= this.members
    this.teams.push(this.team)
    this.teamData.teams= this.teams
   console.log('this.teamdata---',this.teamData)
   this.team={}
   this.totalMembers=0
   this.members=[]
  }






  submitTeam(){
    this.team.members= this.members
    this.teams.push(this.team)
    this.teamData.teams= this.teams
   console.log('this.teamdata---',this.teamData)
   this.team={}
   this.totalMembers=0
   this.members=[]

    this.adminService.addTeam(this.teamData).subscribe((res:any)=>{
      console.log('team added ',res)

      this.router.navigate(['/admin-dashboard'])
     
     
    })
  }
 

  getOrganizationQuizzes(){
    this.adminService.getOrganizationQuizzes().subscribe((res:any)=>{
      console.log('res----->',res)
      this.totalQuizzes=res

    })
   }


   getquizId(){
    this.quizData.organizationName = this.organizationName
   this.matchedDocument= this.totalQuizzes.find((element:any)=> element.organizationName== this.quizData.organizationName && element.eventName==this.quizData.eventName)
  console.log('match',this.matchedDocument)
  this.quizId= this.matchedDocument._id
  }


  
}
