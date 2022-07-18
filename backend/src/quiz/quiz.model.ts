import * as mongoose from 'mongoose'


export const QuizSchema = new mongoose.Schema({
    organizationName:{type:String},
    eventName:{type:String},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    totalQuestions:{type:Number},
    totalTime:{type:Number},
    subject:{type:String},
    played:{type:Boolean,default:false},
    winnerTeam:{type:String,default:'Not Played Yet'},
   quizBank:[
    {
        image:{type:String,default:null},
        type:{type: String},
        question:{type:String},
        options:[String],
        correctAnswer:{type:String}
    }
   ],
   createdAt:{type:Date,default:Date.now()}
})


export interface Quiz extends mongoose.Document{
    organizationName:string;
    eventName:string;
    userId:any;
    totalQuestions:Number;
    totalTime:number;
    subject:string;
    winnerTeam:string;

    played:boolean;


    quizBank:[
        {
            image:String,
            type:{type: String},
            question:{type:String},
            options:[String],
            correctAnswer:{type:String}
        }
       ];
    createdAt:Date,
}