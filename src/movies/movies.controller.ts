import { Controller, Get, Body } from '@nestjs/common';
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

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }
}
