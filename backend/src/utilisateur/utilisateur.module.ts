import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity';
import { UtilisateurController } from './utilisateur.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])],
  providers: [UtilisateurService],
  controllers:[UtilisateurController],
  exports: [UtilisateurService],
})
export class UtilisateurModule {}
