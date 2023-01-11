import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BookRepositoryFactory } from './books.repository';
import { BooksService } from './books.service';
// import { Book } from './entities/books.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Book])], // respository를 사용하려면 등록해 줘야 한다
  controllers: [BooksController],
  // providers: [BooksService],
  providers: [...BookRepositoryFactory, BooksService],
  exports: ['BookRepository'],
})
export class BooksModule {}
