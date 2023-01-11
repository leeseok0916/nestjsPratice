import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UseInterceptors,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const Serialize = (dto: any) => {
  return UseInterceptors(new TransformInterceptor(dto));
};

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private dto: any) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    // return next.handle().pipe(map((data) => ({ data })));
    return next.handle().pipe(
      map((data: T) => {
        return {
          status: 200,
          data: plainToInstance(this.dto, data),
        };
      }),
    );
  }
}
