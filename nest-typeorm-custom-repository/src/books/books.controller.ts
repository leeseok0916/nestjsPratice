import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/books.entity';

@Controller('books')
export class BooksController {
  constructor(readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Promise<Book[]> {
    // return this.booksService.getAllBooks();
    return this.booksService.getByTitle('aaaa');
  }
}
