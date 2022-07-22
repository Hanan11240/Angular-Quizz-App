import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from './organization.model';

@Injectable()
export class OrganizationService {
 constructor(@InjectModel ('Organization') private readonly organizationModel:Model<Organization>){}

   async  addOrganization(data:any){
    const newOrganization = await new this.organizationModel(data)
        newOrganization.save((err)=>{
                if(err){
                    return  new HttpException('Something went wrong while saving  new organization',409)
                }
        })

        return newOrganization

   }

  async getOrganizations(){
    const organization = await this.organizationModel.find({})
    return organization
   }
}
