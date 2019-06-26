import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { AdressePostInDto } from './adresse.dto';
import { Adresse } from './adresse.entity';

@Controller('adresse')
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Get()
  findAll() {
    return this.adresseService.findAll();
  }

  @Get(':adresseId')
  findOneById(@Param('adresseId') adresseId: string) {
    return this.adresseService.findById(adresseId);
  }

  @Post()
  create(@Body() dto: AdressePostInDto) {
    return this.adresseService.create(dto);
  }

  @Put(':adresseId/update')
  async update(
    @Param('adresseId') adresseId: string,
    @Body() dto: AdressePostInDto,
  ): Promise<Adresse> {
    return this.adresseService.update(adresseId, dto);
  }

  @Delete(':adresseId/delete')
  async delete(@Param('adresseId') adresseId): Promise<any> {
    return this.adresseService.delete(adresseId);
  }
}
