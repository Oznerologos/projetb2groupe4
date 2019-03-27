import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AgenceModule } from './agence/agence.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UtilisateurModule, AgenceModule],
  controllers: [AppController, UtilisateurController],
  providers: [AppService],
})
export class AppModule {}
