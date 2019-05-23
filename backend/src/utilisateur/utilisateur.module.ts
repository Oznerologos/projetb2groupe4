import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
// import { Mdp } from 'src/mdp/mdp.entity';
import { Adresse } from 'src/adresse/adresse.entity';
// import { MdpService } from 'src/mdp/mdp.service';
import { AdresseService } from 'src/adresse/adresse.service';
import { AdresseModule } from 'src/adresse/adresse.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]),
    AdresseModule,
    // TypeOrmModule.forFeature([Mdp]),
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
