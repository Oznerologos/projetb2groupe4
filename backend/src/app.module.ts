import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AgenceModule } from './agence/agence.module';
import { DependanceController } from './dependance/dependance.controller';
import { ImageController } from './image/image.controller';
import { ImageModule } from './image/image.module';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forRoot(), UtilisateurModule, AgenceModule, ImageModule],
  controllers: [AppController, UtilisateurController, DependanceController, ImageController],
=======
  imports: [
    TypeOrmModule.forRoot(),
    UtilisateurModule,
    AgenceModule,
    ImageModule,
  ],
  controllers: [
    AppController,
    UtilisateurController,
    DependanceController,
    ImageController,
  ],
>>>>>>> 2f079369e1696dde6c99d6a598501586bbf0406a
  providers: [AppService],
})
export class AppModule {}
