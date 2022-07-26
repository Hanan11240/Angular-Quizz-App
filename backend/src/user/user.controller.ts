import { Controller,Post,Req,Res } from '@nestjs/common';
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
    @Req() req:any,
    @Res() res:any
   ){
    const user= await this.userService.login(req.body)
    res.status(200).json(user)
   }

}
