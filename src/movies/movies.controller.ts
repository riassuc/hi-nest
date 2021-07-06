import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesServices: MoviesService){}

    @Get()
    getAll(): Movie[]{
        return this.moviesServices.getAll();
    }

    @Get('/:idd')
    getOne(@Param('idd') movieId: number) : Movie {
        return this.moviesServices.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesServices.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId: number){
        return this.moviesServices.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto){
        return this.moviesServices.update(movieId, updateData);
    }

}
