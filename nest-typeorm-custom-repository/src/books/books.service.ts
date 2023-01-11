import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookRepository } from './books.repository';
import { Book } from './entities/books.entity';

@Injectable()
export class BooksService {
  // constructor(
  //   @InjectRepository(Book)
  //   private booksRepository: Repository<Book>,
  // ) {}
  constructor(
    @Inject('BookRepository')
    private readonly booksRepository: BookRepository,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async getByTitle(title: string): Promise<Book[]> {
    return await this.booksRepository.getByTitle(title);
  }
}
