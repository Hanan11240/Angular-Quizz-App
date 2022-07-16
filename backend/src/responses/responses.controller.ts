import { Controller, Post, Req } from '@nestjs/common';
import { ResponsesService } from './responses.service';




@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post()
  async saveResponse(
    @Req() req:any
  ){
      const savedResponse= await this.responsesService.saveResponse(req.body)
      return savedResponse
  }
}
