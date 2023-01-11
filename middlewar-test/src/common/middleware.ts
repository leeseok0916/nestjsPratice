import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    // console.log('req', req.baseUrl);
    // console.log('req', req.body);
    // console.log('req', req.params);
    // console.log('req', req.path);
    // console.log('req', req.headers);
    // console.log('res', res);
    next();
  }
}