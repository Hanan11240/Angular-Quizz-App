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
totalQuizzes:any=[]
quizData:any={}
matchedDocument:any
organizationName:any={}
teamInfo:any={}
createTeam:boolean=false
addedMember:number=0
members:any=[]
totalMembers:number=0
allowUpdateMember:boolean=false
memberToUpdate:any



  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.getOrganizationQuizzes()
    this.organizationName = localStorage.getItem('organizationName')
  }





  addTeamInfo(){
    if(this.teamInfo.noOfTeams ==1 )
    {
      Swal.fire('No of Teams participating must atleast be 2')
      return
    }
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

editMember(teamMember:any){
  this.allowUpdateMember=true
  this.memberToUpdate=teamMember
  
    console.log('memberindex',teamMember)
 
}


updateMember(){   
  console.log('member',this.member)
  console.log('member to updatee',this.memberToUpdate)
 const indexToUpdate = this.members.findIndex((element:any)=> element==this.memberToUpdate)
 console.log('index',indexToUpdate)
 this.members.splice(indexToUpdate,1,this.member)
 this.member=''
 this.allowUpdateMember=false;
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
