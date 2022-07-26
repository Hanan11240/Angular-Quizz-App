import { HttpException, Inject, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from './responses.model';
import { Quiz } from 'src/quiz/quiz.model';
import { Team } from 'src/team/team.model';
import { Types } from 'mongoose';


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
             saveResponse.save((err:any)=>{
                if(err){
                    throw new HttpException('Somthing went wrong while saving your response',409)
                }
            })
           

             const correspondingQuiz = await this.quizModel.find({_id:quizId},{quizBank:1,_id:0})
            
             correspondingQuiz[0].quizBank.forEach((element:any,i)=>{
                if(element.correctAnswer==saveResponse.responses[i].response)
                    score++;
             })

        
             const teamsScore= await this.teamModel.updateOne({'teams._id':teamId},{'$set':{
                'teams.$.score':score
             }})



                
               await  this.quizModel.findOneAndUpdate({_id:quizId},{$set:{
                    played:true,
                }})           
                

      

                const teams: any =  new Types.ObjectId(teamsId) 
          
              const winnerTeam =    await this.teamModel.aggregate([
                    {"$match":{"_id":teams}},
                    { "$unwind": "$teams"},
                    { "$group": {
                                 "_id": { 
                                    
                                "teamsId": "$_id",
                                "teamName": "$teams.teamName",
                            "teamScore":"$teams.score",
                            }, 
                            }},
                      {$sort:{"_id.teamScore":-1}},
                          {$limit:1}
                ])

                   console.log('winner team',winnerTeam)

              
                
               const teamWins = await this.quizModel.findOneAndUpdate({_id:quizId},{$set:{
                winnerTeam:winnerTeam[0]._id.teamName
               }})


              
        
            return winnerTeam
            
    }
}
