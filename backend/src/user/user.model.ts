import * as mongoose from 'mongoose'


export const UserSchema = new mongoose.Schema({
   
    firstName:{type: String},
    organizationId:{type:mongoose.Schema.Types.ObjectId,ref:'Organization'},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    role:{type:String,default:'participant'}
})


export interface User extends mongoose.Document{
    firstName:string;
    organizationId:any
    lastName:string;
    email:string;
    password:string;
    role:string;


}