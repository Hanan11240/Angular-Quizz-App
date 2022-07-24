import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {
organizartionData:any={}
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }



  addOrganization(){
       
          this.adminService.addOrganization(this.organizartionData).subscribe((res:any)=>{
            console.log('res',res)
          })
  }

}
