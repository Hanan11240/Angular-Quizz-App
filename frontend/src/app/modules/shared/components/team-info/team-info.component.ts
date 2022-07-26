import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {
playerInfo:any={}
user:any={}
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialog:MatDialog,private sharedService: SharedService,
  private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('userId') || ''
  }

 
  confirmParicipation(){
    console.log('data',this.data)
    this.playerInfo.quizId= this.data._id
    console.log('player info',this.playerInfo)
    this.sharedService.confirmParicipation(this.playerInfo).subscribe((res:any)=>{
      console.log('team---->',res)
      this.router.navigate(['/play-quiz',this.data._id,res._id,res?.teams[0]?._id])
      this.dialog.closeAll()

    },(error:any)=>{
      Swal.fire(`${error.error.message}`)
    })
    
  } 

  close(){
    this.dialog.closeAll()
  }

}
