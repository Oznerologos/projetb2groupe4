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
import { MdpService } from 'src/mdp/mdp.service';
import { AdresseService } from 'src/adresse/adresse.service';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(
    private readonly utilisateurService: UtilisateurService,
    private readonly mdpService: MdpService,
    private readonly adresseService: AdresseService,
  ) {}

  @Get()
  findAll() {
    return this.utilisateurService.findAll();
  }

  @Get(':utilisateurId')
  findOneById(@Param('utilisateurId') utilisateurId: string) {
    return this.utilisateurService.findById(utilisateurId);
  }

  @Post()
  async create(@Body() dto: UtilisateurPostInDto) {
    const user = await this.utilisateurService.create(dto);
    await this.mdpService.create(dto);
    await this.adresseService.create(dto);
  }

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
