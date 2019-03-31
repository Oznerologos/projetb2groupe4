import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { BienService } from './bien.service';
import { BienPostInDto } from './bien.dto';
import { Bien } from './bien.entity';
import { AgenceService } from 'src/agence/agence.service';
import { AgencePostInDto } from 'src/agence/agence.dto';
import { AdressePostInDto } from 'src/adresse/adresse.dto';
import { AdresseService } from 'src/adresse/adresse.service';
import { ClientPostInDto } from 'src/client/client.dto';
import { ClientService } from 'src/client/client.service';

@Controller('bien')
export class BienController {
  constructor(
    private readonly bienService: BienService,
    private readonly agenceService: AgenceService,
    private readonly adresseService: AdresseService,
    private readonly clientService: ClientService,
  ) {}

  @Get()
  findAll() {
    return this.bienService.findAll();
  }

  @Get(':bienId')
  findOneById(@Param('bienId') bienId: string) {
    return this.bienService.findById(bienId);
  }

  @Post()
  async create(@Body() dto: BienPostInDto) {
    return this.bienService.create(dto);
  }

  @Put(':bienId/update')
  async update(
    @Param('bienId') bienId: string,
    @Body() dto: BienPostInDto,
  ): Promise<Bien> {
    return this.bienService.update(bienId, dto);
  }

  @Delete(':bienId/delete')
  async delete(@Param('bienId') bienId): Promise<any> {
    return this.bienService.delete(bienId);
  }
}
