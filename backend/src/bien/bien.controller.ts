import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BienService } from './bien.service';
import { BienPostInDto } from './bien.dto';

@Controller('bien')
export class BienController {
    constructor(private readonly bienService: BienService) {}

    @Get() // Affiche tout 
    findAll() {
        return this.bienService.findAll();
    }

    @Get(':id') // a qui ca correspond et on l'affiche
    findOneById(@Param('id') photoId: string){
        return this.bienService.findById(id);
    }

    @Post() // va créer l'objet
    create(@Body() dto: BienPostInDto){
        return this.bienService.create(dto);
    }
}
