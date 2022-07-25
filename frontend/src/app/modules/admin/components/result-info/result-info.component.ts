import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from '../../service/admin.service';


@Component({
  selector: 'app-result-info',
  templateUrl: './result-info.component.html',
  styleUrls: ['./result-info.component.scss']
})
export class ResultInfoComponent implements OnInit {
  quiz:any={}
  teamData:any={}
  quizData:any={}
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private adminService:AdminService) { }

  ngOnInit(): void {
    console.log('data',this.data._id)
    this.getTeams()
    
    

  }

  getTeams()
{
  this.quizData=this.data.winnerTeam
  this.quiz.quizId= this.data._id

  this.adminService.getTeams(this.quiz).subscribe((res:any)=>{
      console.log('teamsInfo',res)
      this.teamData=res
  })

}


}
