import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { Mdp } from 'src/mdp/mdp.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]),
    TypeOrmModule.forFeature([Mdp]),
  ],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
  // exports: [UtilisateurService],
})
export class UtilisateurModule {}
