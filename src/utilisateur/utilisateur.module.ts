import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';

@Module({
  providers: [UtilisateurService]
})
export class UtilisateurModule {}
