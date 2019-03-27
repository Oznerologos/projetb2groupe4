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

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AdresseModule,
    AgenceModule,
    BienModule,
    ImageModule,
    UtilisateurModule,
    VilleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
