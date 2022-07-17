import { HttpException, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from './responses.model';
import { Quiz } from 'src/quiz/quiz.model';
import { Team } from 'src/team/team.model';

@Injectable()
export class ResponsesService {

    constructor(@InjectModel('Response') private readonly responseModel:Model<Response>,
    @InjectModel('Quiz') private readonly quizModel:Model<Quiz>,
    @InjectModel ('Team') private readonly teamModel:Model<Team>
    ){}

    async saveResponse(data:any){
    
        const {quizId,teamsId,teamId}= data;
        let score=0;
            const saveResponse= await new  this.responseModel(data)
            const savedResponse = saveResponse.save((err:any)=>{
                if(err){
                    throw new HttpException('Somthing went wrong while saving your response',409)
                }
            })

             const correspondingQuiz = await this.quizModel.find({_id:quizId},{quizBank:1,_id:0})
            
             correspondingQuiz[0].quizBank.forEach((element:any,i)=>{
                if(element.correctAnswer==saveResponse.responses[i].response)
                    score++;
             })
             console.log('teamsId---->',teamsId)
             console.log('teamId---->',teamId)
            //  const teamsScore= this.teamModel.findOneAndUpdate({_id:teamsId},{teams:{elemMatch:{_id:teamId}}},{$set:{teams:{score}}})
             const teamsScore= this.teamModel.updateOne({'teams._id':teamId},{'$set':{
                'teams.$.score':score,
                'teams.$.responseTime':Date.now()
             }})
            
            return teamsScore
    }
}
