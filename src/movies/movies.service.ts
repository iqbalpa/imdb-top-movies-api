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

  async filterByRating(rating: string): Promise<Movie[]> {
    const ratingFloat: number = parseFloat(rating);
    const movies: Movie[] = await prisma.movie.findMany({
      where: { Rating: { gte: ratingFloat } },
    });
    return movies;
  }

  async filterByMetascore(metascore: string): Promise<Movie[]> {
    const metascoreFloat: number = parseFloat(metascore);
    const movies: Movie[] = await prisma.movie.findMany({
      where: { MetaScore: { gte: metascoreFloat } },
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

  async filterByGenre(genre: string): Promise<Movie[]> {
    const movies: Movie[] = await prisma.movie.findMany({
      where: { Genre: { contains: genre } },
    });
    return movies;
  }

  async filterByRuntime(runtime: string): Promise<Movie[]> {
    const runtimeFloat: number = parseFloat(runtime);
    const movies: Movie[] = await prisma.movie.findMany();
    const filteredMovies: Movie[] = movies.filter((movie) => {
      const match = movie.Runtime.match(/^(\d+) min$/);
      if (match) {
        const movieRuntime = parseInt(match[1], 10);
        return movieRuntime <= runtimeFloat;
      }
      return false;
    });
    return filteredMovies;
  }

  async filterByReleasedYear(from: string, to: string) {
    const fromFloat: number = parseFloat(from);
    const toFloat: number = parseFloat(to);
    const movies: Movie[] = await prisma.movie.findMany();
    const filteredMovies: Movie[] = movies.filter((movie) => {
      const match = movie.ReleasedYear.match(/^(\d+)/);
      if (match) {
        const releasedYear = parseInt(match[0], 10);
        return releasedYear >= fromFloat && releasedYear <= toFloat;
      }
      return false;
    });
    return filteredMovies;
  }

  async filterByCertificate(certificate: string) {
    const movies: Movie[] = await prisma.movie.findMany({
      where: { Certificate: certificate },
    });
    return movies;
  }
}
