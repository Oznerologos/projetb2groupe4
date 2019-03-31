import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { Mdp } from 'src/mdp/mdp.entity';
import { Adresse } from 'src/adresse/adresse.entity';
import { MdpService } from 'src/mdp/mdp.service';
import { AdresseService } from 'src/adresse/adresse.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]),
    TypeOrmModule.forFeature([Mdp]),
    TypeOrmModule.forFeature([Adresse]),
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService, MdpService, AdresseService],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
