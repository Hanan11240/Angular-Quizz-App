import { HttpException, Injectable } from '@nestjs/common';
import { Team } from './team.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz } from 'src/quiz/quiz.model';


@Injectable()
export class TeamService {

    constructor(@InjectModel('Team') private readonly teamModel:Model<Team>,@InjectModel('Quiz') private readonly quizModel:Model<Quiz>){}

    async addTeam(data:any){
        console.log('data--->adteam------>',data)
                const newTeam = await new  this.teamModel(data)
                const createdTeam = newTeam.save()
                return createdTeam
    }

    async allowToParticipate(data:any){
        const {teamName,email,quizId}= data;
         const allowed=  await this.teamModel.find({quizId:quizId},{teams:{$elemMatch:{teamName:teamName,members:email}}})
         const [teams]= allowed
        //  const {teams}= allowed
         if(teams && teams.teams.length>0){
             return teams
           
         }else{
            const err= 'Your are not part of this quiz'
            throw new HttpException(err,404)
         }

    }

    async getWinner(){
        const teams = this.teamModel.find({})
        return teams
    }

}
