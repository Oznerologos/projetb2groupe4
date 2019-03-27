import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { VilleService } from './ville.service';
import { VillePostInDto } from './ville-post-in-dto';

@Controller('ville')
export class VilleController {
  constructor(private readonly villeService: VilleService) {}

  @Get()
  findAll() {
    return this.villeService.findAll();
  }

  @Get(':villeId')
  findOneById(@Param('villeId') villeId: string) {
    return this.villeService.findById(villeId);
  }

  @Post()
  create(@Body() dto: VillePostInDto) {
    return this.villeService.create(dto);
  }
}
