import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { AgenceService } from './agence.service';
import { AgencePostInDto } from './agence.dto';
import { Agence } from './agence.entity';
import { AdressePostInDto } from 'src/adresse/adresse.dto';
import { AdresseService } from 'src/adresse/adresse.service';

@Controller('agence')
export class AgenceController {
  constructor(
    private readonly agenceService: AgenceService,
    private readonly adresseService: AdresseService,
  ) {}

  @Get()
  findAll() {
    return this.agenceService.findAll();
  }

  @Get(':agenceId')
  findOneById(@Param('agenceId') agenceId: string) {
    return this.agenceService.findById(agenceId);
  }

  @Post()
  async create(
    @Body() dto: AgencePostInDto,
    adressePostInDto: AdressePostInDto,
  ) {
    await this.adresseService.create(adressePostInDto);
    return this.agenceService.create(dto);
  }

  @Put(':agenceId/update')
  async update(
    @Param('agenceId') agenceId: string,
    @Body() dto: AgencePostInDto,
  ): Promise<Agence> {
    return this.agenceService.update(agenceId, dto);
  }

  @Delete(':agenceId/delete')
  async delete(@Param('agenceId') agenceId): Promise<any> {
    return this.agenceService.delete(agenceId);
  }
}
