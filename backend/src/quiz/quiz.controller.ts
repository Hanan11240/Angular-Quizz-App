import { Controller, Post, Req,Get, Put } from '@nestjs/common';
import { QuizService } from './quiz.service';



@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async createQuiz(
  
    @Req() req:any

  ){
     const quiz = await this.quizService.createQuiz(req.body);
     console.log('body in controller------>',req.body)
     
     return quiz
  }

  @Post('get-organization-quizzes')

  async getOrganizationQuizzes(
    @Req() req:any
  ){
    console.log('body--->',req.body)
        const organizationQuizzes = await this.quizService.getOrganizationQuizzes(req.body)
        return organizationQuizzes
  }

  @Get('all-quizzes')
  async getAllQuizzes(){
    const allQuizzes = await this.quizService.getAllquizzes()
    return allQuizzes
  }

  @Post('play')
  async getQuiz(
    @Req() req:any
  ){
    const question =  await this.quizService.getQuiz(req.body)
    return question
  }
  
  @Put('submit-response')

  async saveResponses(
    @Req() req:any
  ){

    const score= await this.quizService.saveResponse(req.body)
    return score

  }

  @Post('get-quiz-id')
  async getQuizId(
    @Req() req:any
  ){
    const quizId = await this.quizService.getQuizId(req.body) 
    return quizId
  }
}
