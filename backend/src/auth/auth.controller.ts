import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UtilisateurPostInDto } from 'src/utilisateur/utilisateur.dto';
import { AuthPostInDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: AuthPostInDto) {
    return this.authService.login(dto);
  }

  @Post('register')
  async register(@Body() dto: UtilisateurPostInDto) {
    return this.authService.register(dto);
  }
}
