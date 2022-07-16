import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { ResponsesModule } from './responses/responses.module';

@Module({
  imports: [QuizModule,MongooseModule.forRoot('mongodb://localhost:27017/quiz-project'), UserModule, TeamModule, ResponsesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
