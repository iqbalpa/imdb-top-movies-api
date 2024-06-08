import { Controller, Get, Body, Query } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('title')
  async findByTitle(@Body('title') title: string): Promise<Movie> {
    return this.movieService.findByTitle(title);
  }

  @Get('director')
  async findByDirector(@Body('director') director: string): Promise<Movie[]> {
    return this.movieService.findByDirector(director);
  }

  @Get('rating')
  async filterByRating(@Body('rating') rating: number): Promise<Movie[]> {
    return this.movieService.filterByRating(rating);
  }

  @Get('metascore')
  async filterByMetascore(
    @Body('metascore') metascore: number,
  ): Promise<Movie[]> {
    return this.movieService.filterByMetascore(metascore);
  }

  @Get('starname')
  async filterByStarname(@Body('starname') starname: string): Promise<Movie[]> {
    return this.movieService.filterByStarname(starname);
  }

  @Get('genre')
  async filterByGenre(@Body('genre') genre: string): Promise<Movie[]> {
    return this.movieService.filterByGenre(genre);
  }

  @Get('runtime')
  async filterByRuntime(@Body('runtime') runtime: number): Promise<Movie[]> {
    return this.movieService.filterByRuntime(runtime);
  }

  @Get('year')
  async filterByReleasedYear(
    @Query('from') from: number,
    @Query('to') to: number,
  ): Promise<Movie[]> {
    return this.movieService.filterByReleasedYear(Number(from), Number(to));
  }

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
