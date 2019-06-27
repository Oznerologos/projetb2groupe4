import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilisateurPostInDto } from 'src/utilisateur/utilisateur.dto';
import { AuthPostInDto } from './auth.dto';
import { AdressePostInDto } from 'src/adresse/adresse.dto';
import { AdresseService } from 'src/adresse/adresse.service';
import { Adresse } from 'src/adresse/adresse.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly adresseService: AdresseService,
  ) {}

  @Post('login')
  async login(@Body() dto: AuthPostInDto) {
    return this.authService.login(dto);
  }

  @Post('register')
  async register(@Body() dto: UtilisateurPostInDto) {
    return this.authService.register(dto);
  }

  @Post('inscription')
  async inscription(
    @Body() dto: [Partial<UtilisateurPostInDto>, Partial<AdressePostInDto>],
  ) {
    try {
      let adresse: Adresse = await this.adresseService.create(dto[1]);
      return this.authService.register({
        ...dto[0],
        utilisateurAdresse: adresse.adresseId,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
