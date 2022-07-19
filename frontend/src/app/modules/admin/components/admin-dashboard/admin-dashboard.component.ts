import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

export interface PeriodicElement {
  organizationName: string;
  eventName: string;
  winner: string;
  action:string;
}





@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

totalOrganizationQuizzes:any={}
totalQuizPlayed:number=0
  constructor(private adminService:AdminService) { }

  
  public doughnutChartData: ChartData<'doughnut'> = {
    
    
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  

  ngOnInit(): void {
    this.getOrganizationQuizzes()
    this.getQuizBySubjects()
  }


  displayedColumns: string[] = ['organizationName', 'eventName', 'winner','action'];
  dataSource = []

   getOrganizationQuizzes(){
    this.adminService.getOrganizationQuizzes().subscribe((res:any)=>{

      console.log('res----->',res)
      this.dataSource= res
      this.totalOrganizationQuizzes = Object.values(res).length
      console.log('data source',this.dataSource)

       res.forEach((element:any)=>{
          if(element.played)
          {
                this.totalQuizPlayed++;
          }
      })


    })
   }


   getQuizBySubjects(){
    this.adminService.getQuizBySubjects().subscribe((res:any)=>{
      console.log('response of graph',res)
      const data = res.map((obj:any)=>{
        return obj.count
      })
      this.doughnutChartData.datasets.push({data:data})

      let  labels = res.map((obj:any)=>{
        return obj._id
      })

      
 
  this.doughnutChartData.labels =labels


  console.log('data',this.doughnutChartData.datasets)
   

    })
   }
}
