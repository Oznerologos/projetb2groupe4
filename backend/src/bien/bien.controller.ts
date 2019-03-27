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

<<<<<<< HEAD
  @Get(':id') // a qui ca correspond et on l'affiche
  findOneById(@Param('id') photoId: string) {
    return this.bienService.findById(id);
  }
=======
    @Get(':idBien') // a qui ca correspond et on l'affiche
    findOneById(@Param('idBien') idBien: string){
        return this.bienService.findById(idBien);
    }
>>>>>>> 3f469129b0b2180fadcfef99276e166855f8fa1d

  @Post() // va créer l'objet
  create(@Body() dto: BienPostInDto) {
    return this.bienService.create(dto);
  }
}
