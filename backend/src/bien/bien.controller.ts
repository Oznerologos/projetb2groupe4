import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  Header,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BienService } from './bien.service';
import { BienPostInDto } from './bien.dto';
import { Bien } from './bien.entity';
import { ImageService } from 'src/image/image.service';
import { DependanceService } from 'src/dependance/dependance.service';
import { SearchBienDto } from './search.dto';
import { AdresseService } from 'src/adresse/adresse.service';
import { VilleService } from 'src/ville/ville.service';
import { DepartementService } from 'src/departement/departement.service';
import { AgentService } from 'src/agent/agent.service';
import { AgenceService } from 'src/agence/agence.service';
import { ClientService } from 'src/client/client.service';
import { AdressePostInDto } from 'src/adresse/adresse.dto';
import { Adresse } from 'src/adresse/adresse.entity';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Controller('bien')
export class BienController {
  constructor(
    private readonly bienService: BienService,
    private readonly imageService: ImageService,
    private readonly dependanceService: DependanceService,
    private readonly adresseService: AdresseService,
    private readonly villeService: VilleService,
    private readonly departementService: DepartementService,
    private readonly agentService: AgentService,
    private readonly agenceService: AgenceService,
    private readonly clientService: ClientService,
    private readonly utilisateurService: UtilisateurService,
  ) {}

  @Get()
  findAll() {
    return this.bienService.findAll();
  }

  @Get(':bienId')
  findOneById(@Param('bienId') bienId: string) {
    return this.bienService.findById(bienId);
  }

  @Get(':utilisateurId/utilisateur')
  async findOneByUser(@Param('utilisateurId') utilisateurId: string) {
    const utilisateur: Utilisateur = await this.utilisateurService.findById(
      utilisateurId,
    );
    const client = await this.clientService.findByUtilisateur(
      utilisateur.utilisateurId,
    );
    const agent = await this.agentService.findByUtilisateur(
      utilisateur.utilisateurId,
    );
    const clientId = client === undefined ? '' : client.clientId;
    const agentId = agent === undefined ? '' : agent.agentId;
    return await this.bienService.findByUtilisateur(clientId, agentId);
  }

  @Post('/search/')
  async findByParams(@Body() bienParametres: Partial<SearchBienDto>) {
    const bien: Bien[] = await this.bienService.findByParams(bienParametres);
    for (let i = 0; i < bien.length; i++) {
      bien[i].bienImages = await this.imageService.findAllByBien(
        bien[i].bienId,
      );
      bien[i].bienDependances = await this.dependanceService.findAllByBien(
        bien[i].bienId,
      );
      bien[i].bienAdresse = await this.adresseService.findById(
        bien[i].bienAdresseId,
      );
      bien[i].bienAdresse.adresseVille = await this.villeService.findById(
        bien[i].bienAdresse.adresseVilleId,
      );
      let departement = await this.departementService.findById(
        bien[i].bienAdresse.adresseVille.villeDepartement,
      );
      if (bienParametres.bienDepartement != null) {
        if (departement.departementNom != bienParametres.bienDepartement) {
          bien.splice(i);
        }
      }
    }
    return bien;
  }

  @Post()
  async create(@Body() dto: BienPostInDto) {
    return this.bienService.create(dto);
  }

  @Post('/ajout/')
  @UseGuards(JwtAuthGuard)
  async ajout(
    @Body() dto: [Partial<BienPostInDto>, Partial<AdressePostInDto>],
  ) {
    try {
      let adresse: Adresse = await this.adresseService.create(dto[1]);
      let agentId: string;
      await this.agentService
        .findFirst()
        .then(data => (agentId = data.agentId));
      let agenceId: string;
      await this.agenceService
        .findFirst()
        .then(data => (agenceId = data.agenceId));
      let clientId: string;
      await this.clientService
        .findFirst()
        .then(data => (clientId = data.clientId));
      return await this.bienService.create({
        ...dto[0],
        bienAgent: agentId,
        bienAgence: agenceId,
        bienClient: clientId,
        bienAdresseId: adresse.adresseId,
      });
    } catch (e) {
      console.log(e);
    }
  }

  @Put(':bienId/update')
  async update(
    @Param('bienId') bienId: string,
    @Body() dto: BienPostInDto,
  ): Promise<Bien> {
    return this.bienService.update(bienId, dto);
  }

  @Delete(':bienId/delete')
  async delete(@Param('bienId') bienId): Promise<any> {
    return this.bienService.delete(bienId);
  }
}
