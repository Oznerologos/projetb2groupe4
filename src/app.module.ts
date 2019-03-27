import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurController } from './utilisateur/utilisateur.controller';
import { UtilisateurModule } from './utilisateur/utilisateur.module';

@Module({
  imports: [UtilisateurModule],
  controllers: [AppController, UtilisateurController],
  providers: [AppService],
})
export class AppModule {}
