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

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]),
    AdresseModule,
    AgentModule,
    ClientModule,
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService, AgentService, ClientService],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
