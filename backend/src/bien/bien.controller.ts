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
import { Dependance } from 'src/dependance/dependance.entity';
import { Image } from 'src/image/image.entity';

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
  async findOneById(@Param('bienId') bienId: string) {
    const bien: Bien = await this.bienService.findById(bienId);
    bien.bienImages = await this.imageService.findAllByBien(bien.bienId);
    bien.bienDependances = await this.dependanceService.findAllByBien(
      bien.bienId,
    );
    bien.bienAdresse = await this.adresseService.findById(bien.bienAdresseId);
    bien.bienAdresse.adresseVille = await this.villeService.findById(
      bien.bienAdresse.adresseVilleId,
    );

    return bien;
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

    const bien: Bien[] = await this.bienService.findByUtilisateur(
      clientId,
      agentId,
    );
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
    }
    return bien;
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
    @Req() request: any,
  ) {
    try {
      let utilisateur: Utilisateur = await request.user;
      let adresse: Adresse = await this.adresseService.create(dto[1]);
      let agent = await this.agentService.findByUtilisateur(
        utilisateur.utilisateurId,
      );
      let agenceId: string;
      await this.agenceService
        .findById(agent.agentAgence)
        .then(data => (agenceId = data.agenceId));
      let clientId: string;
      await this.clientService
        .findByUtilisateur(utilisateur.utilisateurId)
        .then(data => (clientId = data.clientId));
      return await this.bienService.create({
        ...dto[0],
        bienAgent: agent.agentId,
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
    const dependances: Dependance[] = await this.dependanceService.findAllByBien(
      bienId,
    );
    for (let i = 0; i < dependances.length; i++) {
      const imageDep: Image[] = await this.imageService.findAllByDependance(
        dependances[i].dependanceId,
      );
      for (let j = 0; j < imageDep.length; j++) {
        await this.imageService.delete(imageDep[j].imageId);
      }
      await this.dependanceService.delete(dependances[i].dependanceId);
    }

    const images: Image[] = await this.imageService.findAllByBien(bienId);
    for (let i = 0; i < images.length; i++) {
      await this.imageService.delete(images[i].imageId);
    }

    return this.bienService.delete(bienId);
  }
}
