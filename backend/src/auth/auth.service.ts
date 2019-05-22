import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly utilisateurService: UtilisateurService,
    private readonly jwtService: JwtService,
  ) {}

  async createToken() {
    const user: JwtPayload = { utilisateurMail: 'test@email.com' };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async signIn(): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const utilisateur: JwtPayload = { utilisateurMail: 'test.test@test.com' };
    return this.jwtService.sign(utilisateur);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.utilisateurService.findOneByEmail(
      payload.utilisateurMail,
    );
  }
}
