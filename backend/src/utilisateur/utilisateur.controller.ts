import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurPostInDto } from './utilisateur.dto';
import { Utilisateur } from './utilisateur.entity';
import { JwtAuthGuard } from 'src/auth/auth.guard';
import { ClientService } from 'src/client/client.service';
import { AgentService } from 'src/agent/agent.service';
import { Bien } from 'src/bien/bien.entity';
import { BienService } from 'src/bien/bien.service';
import { Dependance } from 'src/dependance/dependance.entity';
import { DependanceService } from 'src/dependance/dependance.service';
import { ImageService } from 'src/image/image.service';
import { Image } from 'src/image/image.entity';
import { PropositionService } from 'src/proposition/proposition.service';
import { Proposition } from 'src/proposition/proposition.entity';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(
    private readonly utilisateurService: UtilisateurService,
    private readonly clientService: ClientService,
    private readonly agentService: AgentService,
    private readonly bienService: BienService,
    private readonly dependanceService: DependanceService,
    private readonly imageService: ImageService,
    private readonly propositionService: PropositionService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.utilisateurService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('token')
  findOneByToken(@Req() request: any) {
    return request.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':utilisateurId')
  findOneById(@Param('utilisateurId') utilisateurId: string) {
    return this.utilisateurService.findById(utilisateurId);
  }

  @Get(':mail/mail')
  async emailExist(@Param('mail') email: string) {
    const user = await this.utilisateurService.findOneByEmail(email);
    return user === undefined ? false : true;
  }

  @Post()
  create(@Body() dto: UtilisateurPostInDto) {
    return this.utilisateurService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':utilisateurId/update')
  async update(
    @Param('utilisateurId') utilisateurId: string,
    @Body() dto: Partial<UtilisateurPostInDto>,
  ): Promise<Utilisateur> {
    return this.utilisateurService.update(utilisateurId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':utilisateurId/delete')
  async delete(@Param('utilisateurId') utilisateurId): Promise<any> {
    try {
      const agent = await this.agentService.findByUtilisateur(utilisateurId);
      const client = await this.clientService.findByUtilisateur(utilisateurId);
      const biens: Bien[] = await this.bienService.findByUtilisateur(
        client.clientId,
        utilisateurId,
      );
      for (let i = 0; i < biens.length; i++) {
        let bienId = biens[i].bienId;

        let propositions: Proposition[] = await this.propositionService.findByBien(
          bienId,
        );
        for (let i = 0; i < propositions.length; i++) {
          await this.propositionService.delete(propositions[i].propositionId);
        }

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

        await this.bienService.delete(biens[i]);
      }
      let propositions: Proposition[] = await this.propositionService.findByClient(
        client.clientId,
      );
      for (let i = 0; i < propositions.length; i++) {
        await this.propositionService.delete(propositions[i].propositionId);
      }
      await this.agentService.delete(agent.agentId);
      await this.clientService.delete(client.clientId);
      return await this.utilisateurService.delete(utilisateurId);
    } catch {
      return null;
    }
  }
}
