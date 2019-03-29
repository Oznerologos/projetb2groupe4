import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { DepartementService } from './departement.service';
import { DepartementPostInDto } from './departement.dto';
import { Departement } from './departement.entity';

@Controller('departement')
export class DepartementController {
  constructor(private readonly departementService: DepartementService) {}

  @Get()
  findAll() {
    return this.departementService.findAll();
  }

  @Get(':departementId')
  findOneById(@Param('departementId') departementId: string) {
    return this.departementService.findById(departementId);
  }

  @Post()
  create(@Body() dto: DepartementPostInDto) {
    return this.departementService.create(dto);
  }

  @Put(':departementId/update')
  async update(
    @Param('departementId') departementId: string,
    @Body() dto: DepartementPostInDto,
  ): Promise<Departement> {
    return this.departementService.update(departementId, dto);
  }

  @Delete(':departementId/delete')
  async delete(@Param('departementId') departementId): Promise<any> {
    return this.departementService.delete(departementId);
  }
}
