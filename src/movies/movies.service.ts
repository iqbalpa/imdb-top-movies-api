import { Injectable } from '@nestjs/common';
import prisma from 'src/utils/prisma';
import { Movie } from '@prisma/client';

@Injectable()
export class MoviesService {
  async findByTitle(title: string): Promise<Movie> {
    const movie: Movie = await prisma.movie.findUnique({
      where: { SeriesTitle: title },
    });
    return movie;
  }

  async findByDirector(director: string): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({
      where: { Director: director },
    });
    return movies;
  }

  async findAll(): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({});
    return movies;
  }
}
