import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AchatService } from './achat.service';
import { create } from 'domain';

@Controller('achat')
export class AchatController {
  constructor(private readonly achatService: AchatService) {}

  @Get() // Affiche tout
  findAll() {
    return this.achatService.findAll();
  }

  @Get(':idAchat') // a qui ca correspond et on l'affiche
  findOneById(@Param('idAchat') idAchat: string) {
    return this.achatService.findById(idAchat);
  }

  //@Post() // va créer l'objet
  //create(@Body() dto: AchatPostInDto) {
  // return this.achatService.create(dto);
  //}
}
