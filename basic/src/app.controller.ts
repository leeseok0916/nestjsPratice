import { Controller, Get } from '@nestjs/common';

// 컨트롤러가 하는 일은 기본적으로 url을 가져오고 함수를 실행하는 것
@Controller()
export class AppController {
  @Get() // express 의 get router 역할을 함
  getHello(): string {
    return 'Helooooooooo nest';
  }

  @Get('/hello')
  sayHello() {
    return 'heEEEEEEEllloooooo';
  }

  @Get('/ping')
  ping() {
    return 'api ping';
  }
}
