import * as mongoose from 'mongoose'


export const TeamSchema = new mongoose.Schema({
  teams:[{
    teamName:String,
    members:[String],
   
    createdAt:{type:Date,default:Date.now()},
    score:{type:Number,default:0},
   
  }] ,
  quizId:{type:mongoose.Schema.Types.ObjectId,ref:'Quiz'}

})
 

export interface Team extends mongoose.Document{
    teams:[
        {
        teamName:string,
        members:[string],
        createdAt:Date,
        score:number,
     
    }
];
quizId:any;
    

}