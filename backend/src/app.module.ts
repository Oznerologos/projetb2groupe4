import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AgenceModule } from './agence/agence.module';
import { ImageModule } from './image/image.module';
import { AdresseModule } from './adresse/adresse.module';
import { BienModule } from './bien/bien.module';
import { VilleModule } from './ville/ville.module';
import { DepartementModule } from './departement/departement.module';
import { MdpModule } from './mdp/mdp.module';
import { DependanceModule } from './dependance/dependance.module';
import { AgentModule } from './agent/agent.module';
import { ClientModule } from './client/client.module';
import { PropositionModule } from './proposition/proposition.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AdresseModule,
    AgenceModule,
    AgentModule,
    BienModule,
    ClientModule,
    DepartementModule,
    DependanceModule,
    ImageModule,
    MdpModule,
    PropositionModule,
    UtilisateurModule,
    VilleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
