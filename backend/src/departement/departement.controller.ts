import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { DepartementPostInDto } from './departement.dto';

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
}
