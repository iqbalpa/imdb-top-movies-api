import { Injectable } from '@nestjs/common';
import prisma from 'src/utils/prisma';
import { Movie } from '@prisma/client';

@Injectable()
export class MoviesService {
  async findAll(): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({});
    return movies;
  }

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

  async filterByRating(rating: number): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({
      where: { Rating: { gte: rating } },
    });
    return movies;
  }

  async filterByMetascore(metascore: number): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({
      where: { MetaScore: { gte: metascore } },
    });
    return movies;
  }

  async filterByStarname(starname: string): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({
      where: {
        OR: [
          { Star1: starname },
          { Star2: starname },
          { Star3: starname },
          { Star4: starname },
        ],
      },
    });
    return movies;
  }

  // TODO: filter by genre, runtime, released year
}
