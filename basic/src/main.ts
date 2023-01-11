import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// nest.js 웹프레임워크는 main.ts 에서 시작한다.
// 여기가 알파요 오메가이다
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // request 유효성 검사를 하기 위한 설정
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 클래스에 선언된 변수들만 처리하고 그 외의 변수들은 버림
      forbidNonWhitelisted: true, // dto 에 정의되지 않을 필드를 보낼 때 체크
      transform: true, // url param의 타입을 자동으로 변환해 줌
    }),
  );
  await app.listen(9000);
}
bootstrap();
