import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskModule } from './task/task.module';
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    TaskModule, 
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
