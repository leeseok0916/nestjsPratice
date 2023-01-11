import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies') // url 이 /movies 로 시작한다
export class MoviesController {
  // 생성자의 파라미터로 서비스 클래스를 가져온다
  // 컨트롤러에서 서비스에 접근하는 방법
  constructor(readonly moviesService: MoviesService) {}

  @Get('/') // /movies
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('search') // :id 보다 아래 있으면 search 를 id 파라미터 값으로 인식하기 때문에 위로 올라와야 한다
  getOne(@Query('year') searchYear: string) {
    //
  }

  @Get(':id') // /movies/1, movies/100000
  getMovie(@Param('id') id: number) {
    return this.moviesService.getMovie(id);
  }

  @Post('/') // http method post이고 /movies
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.createMovie(movieData);
  }

  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() movieData) {
    return this.moviesService.updateMovie(id, movieData);
  }

  @Patch(':id')
  deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteMovie(id);
  }
}
