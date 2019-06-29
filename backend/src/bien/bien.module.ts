import { Module } from '@nestjs/common';
import { BienService } from './bien.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bien } from './bien.entity';
import { BienController } from './bien.controller';
import { Agence } from 'src/agence/agence.entity';
import { Client } from 'src/client/client.entity';
import { Adresse } from 'src/adresse/adresse.entity';
import { AgenceService } from 'src/agence/agence.service';
import { ClientService } from 'src/client/client.service';
import { AdresseService } from 'src/adresse/adresse.service';
import { ImageService } from 'src/image/image.service';
import { Image } from 'src/image/image.entity';
import { Dependance } from 'src/dependance/dependance.entity';
import { DependanceService } from 'src/dependance/dependance.service';
import { VilleService } from 'src/ville/ville.service';
import { Ville } from 'src/ville/ville.entity';
import { Departement } from 'src/departement/departement.entity';
import { DepartementService } from 'src/departement/departement.service';
import { Agent } from 'http';
import { AgentService } from 'src/agent/agent.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bien]),
    TypeOrmModule.forFeature([Agence]),
    TypeOrmModule.forFeature([Client]),
    TypeOrmModule.forFeature([Adresse]),
    TypeOrmModule.forFeature([Ville]),
    TypeOrmModule.forFeature([Departement]),
    TypeOrmModule.forFeature([Image]),
    TypeOrmModule.forFeature([Dependance]),
    TypeOrmModule.forFeature([Agent]),
    TypeOrmModule.forFeature([Agence]),
    TypeOrmModule.forFeature([Client]),
  ],
  providers: [
    BienService,
    AgenceService,
    ClientService,
    AdresseService,
    ImageService,
    DependanceService,
    VilleService,
    DepartementService,
    AgentService,
    AgenceService,
    ClientService,
  ],
  controllers: [BienController],
  exports: [BienService],
})
export class BienModule {}
