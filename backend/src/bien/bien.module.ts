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

@Module({
  imports: [
    TypeOrmModule.forFeature([Bien]),
    TypeOrmModule.forFeature([Agence]),
    TypeOrmModule.forFeature([Client]),
    TypeOrmModule.forFeature([Adresse]),
  ],
  providers: [BienService, AgenceService, ClientService, AdresseService],
  controllers: [BienController],
  exports: [BienService],
})
export class BienModule {}
