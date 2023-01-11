import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import databaseConfig from './configs/typeorm.config';
import { MoviesModule } from './movies/movies.module';
import { BoardModule } from './board/board.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

// app.modules.ts. 파일은 모든 것의 루트 모듈이다.
// 데코레이터는 클래스에 함수 기능을 추가할 수 있다
// 그러니까 AppModule 클래스에 아래 함수를 추가할 것으로 보면 된다
@Module({
  // DB 설정 정보도 import에 넣어준다
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    MoviesModule,
    BoardModule,
    UsersModule,
  ], // 각 리소스의 모듈을 여기에 등록을 해준다
  controllers: [AppController, UsersController], // app controller는 ping 이나 소개 url 정도를 작성
  providers: [AppService, UsersService],
})
export class AppModule {}
