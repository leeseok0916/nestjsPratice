import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'developer',
  password: 'developer',
  database: 'developer',
  synchronize: true,
  logging: true,
  entities: [__dirname + '/../entities/*.entity.js'], // 엔티티를 이용해서 데이터베이스를 생성해준다. 그래서 엔티티 파일이 어디에 있는지 설정해주는 것
  migrations: [__dirname + '/../migrations/*.js'], // 마이그레이션 파일이 어디에 있는지 설정
  migrationsTableName: 'migrations',
};

export default databaseConfig;
