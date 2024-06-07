import { Controller, Get, Body } from '@nestjs/common';
import { Movie } from '@prisma/client';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':title')
  async findOne(@Body('title') title: string): Promise<Movie> {
    return this.movieService.findOne(title);
  }
}
