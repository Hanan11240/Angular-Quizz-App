import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { organizationSchema } from './organization.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Organization',schema:organizationSchema}])],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
 