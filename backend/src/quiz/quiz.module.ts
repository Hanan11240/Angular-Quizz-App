import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from './quiz.model';
import { TeamSchema } from 'src/team/team.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Quiz',schema:QuizSchema},{name:'Team',schema:TeamSchema}])],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule {}
 