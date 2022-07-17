import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

export interface PeriodicElement {
  organizationName: string;
  eventName: string;
  winner: string;
  // loser: string;
  action:string;
}





@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getOrganizationQuizzes()
   this.getWinner()

  }


  displayedColumns: string[] = ['organizationName', 'eventName', 'winner','action'];
  dataSource = []

  getOrganizationQuizzes(){
    this.adminService.getOrganizationQuizzes().subscribe((res:any)=>{

      console.log('res----->',res)
      this.dataSource= res
      console.log('data source',this.dataSource)

    })
   }

   getWinner(){
    this.adminService.getWinner().subscribe((res:any)=>{
      console.log('team response-->',res)
    })
   }
  
}
