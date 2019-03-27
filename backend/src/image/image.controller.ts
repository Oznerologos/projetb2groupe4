import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImagePostInDto } from './image.dto';

@Controller('image')
export class ImageController {

    constructor(private readonly imageService: ImageService) {}

    @Get() // Affiche tout 
    findAll() {
        return this.imageService.findAll();
    }

    @Get(':photoId') // a qui ca correspond et on l'affiche
    findOneById(@Param('photoId') photoId: string){
        return this.imageService.findById(photoId);
    }

    @Post() // va créer l'objet
    create(@Body() dto: ImagePostInDto){
        return this.imageService.create(dto);
    }
}
