import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { VilleService } from './ville.service';
import { VillePostInDto } from './ville.dto';
import { Ville } from './ville.entity';

@Controller('ville')
export class VilleController {
  constructor(private readonly villeService: VilleService) {}

  @Get()
  findAll() {
    return this.villeService.findAll();
  }

  @Get(':villeId')
  findOneById(@Param('villeId') villeId: string) {
    return this.villeService.findById(villeId);
  }

  @Post()
  create(@Body() dto: VillePostInDto) {
    return this.villeService.create(dto);
  }

  @Put(':villeId/update')
  async update(
    @Param('villeId') villeId: string,
    @Body() dto: VillePostInDto,
  ): Promise<Ville> {
    return this.villeService.update(villeId, dto);
  }

  @Delete(':villeId/delete')
  async delete(@Param('villeId') villeId): Promise<any> {
    return this.villeService.delete(villeId);
  }
}
