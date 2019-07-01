import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UtilisateurModule } from '../utilisateur/utilisateur.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './auth.strategy';
import { AgentModule } from 'src/agent/agent.module';
import { ClientModule } from 'src/client/client.module';
import { AgenceModule } from 'src/agence/agence.module';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import { AgentService } from 'src/agent/agent.service';
import { ClientService } from 'src/client/client.service';
import { AgenceService } from 'src/agence/agence.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      privateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UtilisateurModule,
    AgentModule,
    ClientModule,
    AgenceModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    UtilisateurService,
    AgentService,
    ClientService,
    AgenceService,
  ],
  exports: [PassportModule, AuthService],
})
export class AuthModule {}
