import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  Req,
} from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { AdressePostInDto } from './adresse.dto';
import { Adresse } from './adresse.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Controller('adresse')
export class AdresseController {
  constructor(
    private readonly adresseService: AdresseService,
    private readonly utilisateurService: UtilisateurService,
  ) {}

  @Get()
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':adresseId')
  findOneById(@Param('adresseId') adresseId: string) {
    return this.adresseService.findById(adresseId);
  }

  @Get(':utilisateurId/utilisateur')
  async findOneByUser(@Param('utilisateurId') utilisateurId: string) {
    const utilisateur: Utilisateur = await this.utilisateurService.findById(
      utilisateurId,
    );
    return this.adresseService.findById(utilisateur.utilisateurAdresse);
  }

  @Post()
  create(@Body() dto: AdressePostInDto) {
    return this.adresseService.create(dto);
  }

  @Put(':adresseId/update')
  async update(
    @Param('adresseId') adresseId: string,
    @Body() dto: AdressePostInDto,
  ): Promise<Adresse> {
    return this.adresseService.update(adresseId, dto);
  }

  @Delete(':adresseId/delete')
  async delete(@Param('adresseId') adresseId): Promise<any> {
    return this.adresseService.delete(adresseId);
  }
}
