import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { AdressePostInDto } from './adresse.dto';

@Controller('adresse')
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Get()
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':adresseId')
  findOneById(@Param('adresseId') adresseId: string) {
    return this.adresseService.findById(adresseId);
  }

  @Post()
  create(@Body() dto: AdressePostInDto) {
    return this.adresseService.create(dto);
  }
}
