import * as mongoose from 'mongoose'


export const organizationSchema = new mongoose.Schema({
    organizationName:{type:String},
    address:{type:String},
    contact:{type:Number}
})


export interface Organization extends mongoose.Document{
  
organizationName:string;
address:string;
contact:number;

}