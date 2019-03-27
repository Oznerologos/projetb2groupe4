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
<<<<<<< HEAD
import { DepartementController } from './departement/departement.controller';
import { AchatController } from './achat/achat.controller';
import { AchatModule } from './achat/achat.module';
=======
import { MdpController } from './mdp/mdp.controller';
import { DepartementModule } from './departement/departement.module';
import { MdpModule } from './mdp/mdp.module';
>>>>>>> 1e3273a2d277ac21e0856129cbb213ca2fd8084b

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AdresseModule,
    AgenceModule,
    BienModule,
    ImageModule,
    UtilisateurModule,
    VilleModule,
<<<<<<< HEAD
    AchatModule,
=======
    DepartementModule,
    MdpModule,
>>>>>>> 1e3273a2d277ac21e0856129cbb213ca2fd8084b
  ],
  controllers: [
    AppController,
    UtilisateurController,
    DependanceController,
    ImageController,
<<<<<<< HEAD
    AchatController,
=======
    MdpController,
>>>>>>> 1e3273a2d277ac21e0856129cbb213ca2fd8084b
  ],
  providers: [AppService],
})
export class AppModule {}
