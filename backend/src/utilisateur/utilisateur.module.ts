import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { AdresseModule } from 'src/adresse/adresse.module';
import { AgentModule } from 'src/agent/agent.module';
import { ClientModule } from 'src/client/client.module';
import { AgentService } from 'src/agent/agent.service';
import { ClientService } from 'src/client/client.service';
import { BienModule } from 'src/bien/bien.module';
import { BienService } from 'src/bien/bien.service';
import { DependanceModule } from 'src/dependance/dependance.module';
import { ImageService } from 'src/image/image.service';
import { PropositionService } from 'src/proposition/proposition.service';
import { ImageModule } from 'src/image/image.module';
import { PropositionModule } from 'src/proposition/proposition.module';
import { DependanceService } from 'src/dependance/dependance.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]),
    AdresseModule,
    AgentModule,
    ClientModule,
    BienModule,
    DependanceModule,
    ImageModule,
    PropositionModule,
  ],
  controllers: [UtilisateurController],
  providers: [
    UtilisateurService,
    AgentService,
    ClientService,
    BienService,
    DependanceService,
    ImageService,
    PropositionService,
  ],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
