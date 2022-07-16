import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseSchema } from './responses.model';
import { QuizSchema } from 'src/quiz/quiz.model';
import { TeamSchema } from 'src/team/team.model';


@Module({
  imports:[MongooseModule.forFeature([{name:'Response',schema:ResponseSchema},{name:'Quiz',schema:QuizSchema},{name:'Team',schema:TeamSchema}])],
  controllers: [ResponsesController],
  providers: [ResponsesService]
})
export class ResponsesModule {}
