import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adresse } from './adresse.entity';
import { AdresseService } from './adresse.service';
import { AdresseController } from './adresse.controller';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Adresse]),
    TypeOrmModule.forFeature([Utilisateur]),
  ],
  controllers: [AdresseController],
  providers: [AdresseService, UtilisateurService],
  exports: [AdresseService],
})
export class AdresseModule {}
