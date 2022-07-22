import { HttpException, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()

export class UserService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>){}
     async signUp(data:any){
            const newUser = await new this.userModel(data)
               const user= await newUser.save()
               return user

     }

     async login(data:any){
        const user = await this.userModel.find({email:data.email,password:data.password}).populate({
                    path:'organizationId',
                    select:'organizationName'
        })

        if(user){
            console.log('user',user)
            return user
        }else{
            const error="no user found"
            throw new HttpException(error,409)
        }
     }
    
}
