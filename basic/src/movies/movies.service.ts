import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getMovie(id: number): Movie {
    // return this.movies.find((movie) => movie.id === id);
    const movie = this.movies.find((movie) => movie.id === id);
    if (movie) {
      throw new NotFoundException('Movie not found');
    }

    return movie;
  }

  createMovie(movie: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movie,
    });

    return this.movies;
  }

  updateMovie(id: number, updateData: Movie): Movie {
    this.deleteMovie(id);
    this.movies.push({
      id: id,
      ...updateData,
    });

    return this.getMovie(id);
  }

  deleteMovie(id: number) {
    const movie: Movie = this.getMovie(id);
    const idx: number = this.movies.indexOf(movie);
    return this.movies.splice(idx, 1);
  }
}
