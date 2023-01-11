import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Book } from './entities/books.entity';

export interface BookRepository extends Repository<Book> {
  getByTitle(title: string): Promise<Book[]>;
}

export const BookRepositoryFactory = [
  {
    provide: 'BookRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Book).extend({
        getByTitle(title: string) {
          return this.find({ title });
        },
      }),
    inject: [getDataSourceToken()],
  },
];
