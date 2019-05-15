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
// import { MdpService } from 'src/mdp/mdp.service';
import { AdresseService } from 'src/adresse/adresse.service';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(
    private readonly utilisateurService: UtilisateurService,
    //  private readonly mdpService: MdpService,
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
    //    const mdp = await this.mdpService.create(user.mdp);
    // const adresse = await this.adresseService.create(user.adresse);
    return this.utilisateurService.create(user);
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

/*

Test d'insertion

{
	"utilisateurMail" : "test.test@test.com",
    "utilisateurNom" : "test",
    "utilisateurSexe" : "h",
    "utilisateurTel" : "0606060606",
    "utilisateurPrenom" : "test",
    "utilisateurMotDePasse": "motdepassetest",
    "adresseId" : e9269017-6553-47de-af8d-08ad0ca77f02"}
}

*/
