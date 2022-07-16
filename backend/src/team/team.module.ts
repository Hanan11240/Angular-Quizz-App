import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from './team.model';
import { QuizSchema } from 'src/quiz/quiz.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Team',schema:TeamSchema},{name:'Quiz',schema:QuizSchema}])],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
