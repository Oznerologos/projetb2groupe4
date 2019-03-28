import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurPostInDto } from './utilisateur.dto';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  findAll() {
    return this.utilisateurService.findAll();
  }

  @Get(':utilisateurId')
  findOneById(@Param('utilisateurId') utilisateurId: string) {
    return this.utilisateurService.findById(utilisateurId);
  }

  @Post()
  create(@Body() dto: UtilisateurPostInDto) {
    return this.utilisateurService.create(dto);
  }
}
