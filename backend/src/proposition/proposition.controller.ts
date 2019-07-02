import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionPostInDto } from './proposition.dto';
import { Proposition } from './proposition.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { Client } from 'src/client/client.entity';
import { ClientService } from 'src/client/client.service';
import { EnumValidite } from 'src/enum/validite.enum';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('proposition')
export class PropositionController {
  constructor(
    private readonly propositionService: PropositionService,
    private readonly clientService: ClientService,
  ) {}

  @Get()
  findAll() {
    return this.propositionService.findAll();
  }

  @Get(':propositionId')
  findOneById(@Param('propositionId') propositionId: string) {
    return this.propositionService.findById(propositionId);
  }

  @Get(':bienId/bien')
  @UseGuards(JwtAuthGuard)
  async findOneByToken(@Param('bienId') bienId: string) {
    let propositions: Proposition[] = await this.propositionService.findByBien(
      bienId,
    );
    return propositions;
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() dto: Partial<PropositionPostInDto>,
    @Req() request: any,
  ) {
    try {
      let proposition: Partial<Proposition> = await dto;
      if (proposition.propositionClient == null) {
        let clientUser: Utilisateur = await request.user;
        let client: Client = await this.clientService.findByUtilisateur(
          clientUser.utilisateurId,
        );
        proposition.propositionClient = await client.clientId;
      }
      proposition.propositionEtat = EnumValidite.ENCOURS;
      return this.propositionService.create(proposition);
    } catch (e) {
      console.log(e);
    }
  }

  @Put(':propositionId/update')
  async update(
    @Param('propositionId') propositionId: string,
    @Body() dto: PropositionPostInDto,
  ): Promise<Proposition> {
    return this.propositionService.update(propositionId, dto);
  }

  @Delete(':propositionId/delete')
  async delete(@Param('propositionId') propositionId): Promise<any> {
    return this.propositionService.delete(propositionId);
  }
}
