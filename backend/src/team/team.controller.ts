import { Controller,Post,Req,Get } from '@nestjs/common';
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

  @Get('get-winner')
  async getWinner(){
    const teams = await this.teamService.getWinner()
    return teams
  }



}
