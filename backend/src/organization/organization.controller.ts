import { Controller,Post,Get,Req } from '@nestjs/common';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}


  @Post('add-organization')
    async addOrganization(
      @Req() req:any
    ){
      const organization= await this.organizationService.addOrganization(req.body)
      return organization
    }

    @Get('get-organizations')
    async getOrganizations(){
      const organization = await this.organizationService.getOrganizations()
      return organization
    }
}
