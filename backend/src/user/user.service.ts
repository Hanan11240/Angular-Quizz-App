import { HttpException, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()

export class UserService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>){}
     async signUp(data:any){
         
        if(!(data.organizationName && data.email && data.password && data.firstName && data.lastName) ){
            throw new HttpException('Some fields are empty',409)
        }

            const userExists = await this.userModel.exists({email:data.email})
            if(userExists){
                throw new HttpException('User already exists',409)
            }
            const newUser = await new this.userModel(data)
               const user= await newUser.save()
               return user

     }

     async login(data:any){ 
        
        const user = await this.userModel.find({email:data.email,password:data.password}).populate({
                    path:'organizationId',
                    select:'organizationName'
        })
      
        console.log('data.email',data.email)
        console.log(user.length)
        
        if(user.length < 1){
            const error="no user found"
            throw new HttpException(error,409)
        }else{
            console.log('user',user)
            
            return user
            
        }
     }
    
}
