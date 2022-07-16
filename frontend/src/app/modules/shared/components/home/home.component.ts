import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { TeamInfoComponent } from '../team-info/team-info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allQuizzes:any=[]
  constructor(private sharedServices:SharedService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllQuizzes()
  }

  getAllQuizzes(){
    this.sharedServices.getAllQuizzes().subscribe((res:any)=>{
      console.log('all quizzes ',res)
      this.allQuizzes=res
    })
  }

  participate(quiz:any){
      this.dialog.open(TeamInfoComponent,{
        data:quiz
      })

  }
}
