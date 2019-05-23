import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly utilisateurService: UtilisateurService,
    private readonly jwtService: JwtService,
  ) {}

  private async validate(
    utilisateurMail: string,
    utilisateurMotDePasse: string,
  ) {
    const user = await this.utilisateurService.findOneByEmail(utilisateurMail);
    const isMatched = await bcrypt.compare(
      utilisateurMotDePasse,
      (user && user.utilisateurMotDePasse) || '',
    );
    if (!user || !isMatched) {
      return undefined;
    }

    return user;
  }

  public async login(user: Partial<Utilisateur>) {
    const utilisateur = await this.validate(
      user.utilisateurMail,
      user.utilisateurMotDePasse,
    );
    if (!utilisateur) {
      return { status: 404 };
    } else {
      const utilisateurId = utilisateur.utilisateurId;
      const payload: JwtPayload = { utilisateurId };
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600,
        access_token: accessToken,
        utilisateurId: payload,
        status: 200,
      };
    }
  }

  public async register(user: Partial<Utilisateur>) {
    return this.utilisateurService.create({
      ...user,
      utilisateurMotDePasse: await bcrypt.hash(user.utilisateurMotDePasse, 10),
    });
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return (
      (await this.utilisateurService.findById(payload.utilisateurId)) || false
    );
  }
}
