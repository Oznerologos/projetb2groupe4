import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurPostInDto } from './utilisateur.dto';
import { Utilisateur } from './utilisateur.entity';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

// Rechercher tous les utilisateurs

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
  } // http client en Angular

  @Put(':utilisateurId/update')
  async update(
    @Param('utilisateurId') utilisateurId: string,
    @Body() dto: UtilisateurPostInDto,
  ): Promise<Utilisateur> {
    return this.utilisateurService.update(utilisateurId, dto);
  }

  @Delete(':utilisateurId/delete')
  async delete(@Param('utilisateurId') utilisateurId): Promise<any> {
    return this.utilisateurService.delete(utilisateurId);
  }
}
