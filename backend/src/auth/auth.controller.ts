import { Controller, Get, UseGuards, Post, Body, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilisateurPostInDto } from 'src/utilisateur/utilisateur.dto';
import { AuthPostInDto } from './auth.dto';
import { AdressePostInDto } from 'src/adresse/adresse.dto';
import { AdresseService } from 'src/adresse/adresse.service';
import { Adresse } from 'src/adresse/adresse.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly adresseService: AdresseService,
    private readonly utilisateurService: UtilisateurService,
  ) {}

  @Post('login')
  async login(@Body() dto: AuthPostInDto) {
    return this.authService.login(dto);
  }

  @Post('checkpassword')
  async checkPassword(@Body() idPwd: [string, string]) {
    const utilisateur: Utilisateur = await this.utilisateurService.findById(
      idPwd[0],
    );
    return (await this.authService.validate(
      utilisateur.utilisateurMail,
      idPwd[1],
    )) === undefined
      ? false
      : true;
  }

  @Post('register')
  async register(@Body() dto: UtilisateurPostInDto) {
    return this.authService.register(dto);
  }

  @Post('inscription')
  async inscription(
    @Body() dto: [Partial<UtilisateurPostInDto>, Partial<AdressePostInDto>],
  ) {
    const user = await this.utilisateurService.findOneByEmail(
      dto[0].utilisateurMail,
    );

    if (user === undefined) {
      try {
        let adresse: Adresse = await this.adresseService.create(dto[1]);
        return this.authService.register({
          ...dto[0],
          utilisateurAdresse: adresse.adresseId,
        });
      } catch (e) {
        // return e;
      }
    } else {
      // return "l'adresse mail existe déjà";
    }
  }

  @Put('update')
  async update(
    @Body()
    dto: [string, Partial<UtilisateurPostInDto>, Partial<AdressePostInDto>],
  ): Promise<Utilisateur> {
    const utilisateur: Utilisateur = await this.authService.update(
      dto[0],
      dto[1],
    );
    await this.adresseService.update(utilisateur.utilisateurAdresse, dto[2]);

    return utilisateur;
  }
}
