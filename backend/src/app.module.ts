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
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { DependanceController } from './dependance/dependance.controller';
import { ImageController } from './image/image.controller';
import { DepartementController } from './departement/departement.controller';

@Module({
<<<<<<< HEAD
  imports: [
    TypeOrmModule.forRoot(),
    AdresseModule,
    AgenceModule,
    BienModule,
    ImageModule,
    UtilisateurModule,
    VilleModule,
  ],
  controllers: [AppController, DepartementController],
=======
  imports: [TypeOrmModule.forRoot(), UtilisateurModule, AgenceModule, ImageModule],
  controllers: [AppController, UtilisateurController, DependanceController, ImageController],
>>>>>>> 3f469129b0b2180fadcfef99276e166855f8fa1d
  providers: [AppService],
})
export class AppModule {}
