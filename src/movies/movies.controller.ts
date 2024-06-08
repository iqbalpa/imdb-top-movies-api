import { Controller, Get, Query } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('title')
  async findByTitle(@Query('title') title: string): Promise<Movie> {
    return this.movieService.findByTitle(title);
  }

  @Get('director')
  async findByDirector(@Query('director') director: string): Promise<Movie[]> {
    return this.movieService.findByDirector(director);
  }

  @Get('rating')
  async filterByRating(@Query('rating') rating: string): Promise<Movie[]> {
    return this.movieService.filterByRating(rating);
  }

  @Get('metascore')
  async filterByMetascore(
    @Query('metascore') metascore: string,
  ): Promise<Movie[]> {
    return this.movieService.filterByMetascore(metascore);
  }

  @Get('starname')
  async filterByStarname(
    @Query('starname') starname: string,
  ): Promise<Movie[]> {
    return this.movieService.filterByStarname(starname);
  }

  @Get('genre')
  async filterByGenre(@Query('genre') genre: string): Promise<Movie[]> {
    return this.movieService.filterByGenre(genre);
  }

  @Get('runtime')
  async filterByRuntime(@Query('runtime') runtime: string): Promise<Movie[]> {
    return this.movieService.filterByRuntime(runtime);
  }

  @Get('year')
  async filterByReleasedYear(
    @Query('from') from: string,
    @Query('to') to: string,
  ): Promise<Movie[]> {
    return this.movieService.filterByReleasedYear(from, to);
  }

  @Get('certificate')
  async filterByCertificate(
    @Query('certificate') certificate: string,
  ): Promise<Movie[]> {
    return this.movieService.filterByCertificate(certificate);
  }

  @Get('gross')
  async filterByGross(@Query('gross') gross: string): Promise<Movie[]> {
    return this.movieService.filterByGross(gross);
  }

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
