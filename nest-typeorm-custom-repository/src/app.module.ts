import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from 'typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
