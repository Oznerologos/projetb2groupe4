import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AgenceModule } from './agence/agence.module';
import { DependanceController } from './dependance/dependance.controller';
import { AdresseController } from './adresse/adresse.controller';
import { VilleController } from './ville/ville.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), UtilisateurModule, AgenceModule],
  controllers: [AppController, UtilisateurController, DependanceController, AdresseController, VilleController],
  providers: [AppService],
})
export class AppModule {}
