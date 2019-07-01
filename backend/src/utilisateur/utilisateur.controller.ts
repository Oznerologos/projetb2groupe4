import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurPostInDto } from './utilisateur.dto';
import { Utilisateur } from './utilisateur.entity';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.utilisateurService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('token')
  findOneByToken(@Req() request: any) {
    return request.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':utilisateurId')
  findOneById(@Param('utilisateurId') utilisateurId: string) {
    return this.utilisateurService.findById(utilisateurId);
  }

  @Get(':mail/mail')
  async emailExist(@Param('mail') email: string) {
    const user = await this.utilisateurService.findOneByEmail(email);
    return user === undefined ? false : true;
  }

  @Post()
  create(@Body() dto: UtilisateurPostInDto) {
    return this.utilisateurService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':utilisateurId/update')
  async update(
    @Param('utilisateurId') utilisateurId: string,
    @Body() dto: Partial<UtilisateurPostInDto>,
  ): Promise<Utilisateur> {
    return this.utilisateurService.update(utilisateurId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':utilisateurId/delete')
  async delete(@Param('utilisateurId') utilisateurId): Promise<any> {
    return this.utilisateurService.delete(utilisateurId);
  }
}
