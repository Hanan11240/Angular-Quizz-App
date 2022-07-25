import { Controller,Post,Req } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

@Post('add-team')
 async addTeam(
  @Req() req:any
 ){
  console.log('body',req.body)

      const createdTeam =await  this.teamService.addTeam(req.body)
      return createdTeam;
 }

 @Post('participate')
  async allowToParticipate(
    @Req() req:any
  ){
    const allowed = await this.teamService.allowToParticipate(req.body)
    return allowed
  }

  @Post('get-Teams')
  async getTeams(
    @Req() req:any
  ){
    const teams =  await this.teamService.getTeams(req.body)
    return teams
  }

}
