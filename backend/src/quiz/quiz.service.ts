import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from 'src/team/team.model';
var ObjectID = require('mongodb').ObjectID


@Injectable()
export class QuizService {
    constructor(@InjectModel('Quiz') private readonly quizModel:Model<Quiz>,@InjectModel('Team') private readonly teamModel:Model<Team>){}

    async createQuiz(quizData:any){
       
        
        const quiz= await this.quizModel.insertMany(quizData)
        
        return quiz
    }

    async getOrganizationQuizzes(data:any){
        const {userId}= data
        console.log('userId',userId)
        const query={userId:userId}

            const organizationQuizzes= await this.quizModel.find(query)
            return organizationQuizzes        
    }


    async getAllquizzes(){
        const allQuizzes = await this.quizModel.find({},{quizBank:0})
        return allQuizzes
    }


    async getQuiz(quizData:any){
        console.log('quizData',quizData)
            const {_id,questionNo}= quizData
        const question =  this.quizModel.find({_id:_id},{quizBank:{$slice:[questionNo-1,1]}})
        return question
    }


   

   async getQuizId(quiz:any){
    const {organizationName,eventName}= quiz
    console.log('organizationName',organizationName)
    console.log('eventNameName',eventName)
            const   quizId =  await this.quizModel.find({organizationName:organizationName,eventName:eventName},{_id:1})
            return quizId 
    }
   
    async getQuizBySubjects(data:any){
        const {userId} = data
        const quizBySubject = await this.quizModel.aggregate([
            {$match:{userId:new ObjectID(userId)}},
            {$group:{
                _id:"$subject",
                count:{$sum:1}
            
            }
            
            },{$sort:{_id:1}}
        ])
        console.log('graphdata',quizBySubject)
        return quizBySubject
    }

   async getQuizTime(body:any){
    const {_id}= body
    const quizTime = await this.quizModel.find({_id:_id},{_id:0,totalTime:1})
    
    return quizTime

   }
   

  async getAllOrganizations(){
    const allOrganizations = await this.quizModel.aggregate([
        {
            $group:{_id:"organizationName"}
        }
    ])
    return allOrganizations
  }


}
