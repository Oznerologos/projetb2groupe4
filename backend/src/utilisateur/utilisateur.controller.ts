import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurPostInDto } from './utilisateur.dto';
import { Utilisateur } from './utilisateur.entity';

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

  @Put(':utilisateurId/update')
  async update(
    @Param('utilisateurId') utilisateurId,
    @Body() dto: Utilisateur,
  ): Promise<any> {
    dto.utilisateurId = String(utilisateurId);
    // console.log('Update #' + dto.adresseId);
    return this.utilisateurService.update(dto);
  }

  @Delete(':utilisateurId/delete')
  async delete(@Param('utilisateurId') utilisateurId): Promise<any> {
    return this.utilisateurService.delete(utilisateurId);
  }
}
