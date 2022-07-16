import { Controller,Post,Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async signUp(
    @Req() req:any

  ){
      const user = await this.userService.signUp(req.body)
      return user
  } 

  @Post('login')
   async login(
    @Req() req:any
   ){
    const user= await this.userService.login(req.body)
    return user
   }

}
