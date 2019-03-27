import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AgenceModule } from './agence/agence.module';
import { DependanceController } from './dependance/dependance.controller';
<<<<<<< HEAD
import { ImageController } from './image/image.controller';
import { ImageModule } from './image/image.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UtilisateurModule, AgenceModule, ImageModule],
  controllers: [AppController, UtilisateurController, DependanceController, ImageController],
=======
import { AdresseController } from './adresse/adresse.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), UtilisateurModule, AgenceModule],
  controllers: [AppController, UtilisateurController, DependanceController, AdresseController],
>>>>>>> 30a926e78e9831d90e1f8479e810cdbbcc755d16
  providers: [AppService],
})
export class AppModule {}
