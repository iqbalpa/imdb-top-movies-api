import { Injectable } from '@nestjs/common';
import prisma from 'src/utils/prisma';
import { Movie } from '@prisma/client';

@Injectable()
export class MoviesService {
  async findAll(): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({});
    return movies;
  }

  async findOne(title: string): Promise<Movie> {
    const movie: Movie = await prisma.movie.findUnique({
      where: { SeriesTitle: title },
    });
    return movie;
  }
}
