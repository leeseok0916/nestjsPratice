import { IsString, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  describe: string;
  @IsString({ each: true }) // 배열 하나하나가 문자열인지 검사하겠다는 뜻
  genres: string[];
}
