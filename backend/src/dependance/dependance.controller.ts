import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { DependanceService } from './dependance.service';
import { create } from 'domain';
import { CreateDependanceDto } from './dependance.dto';

@Controller('dependance')
export class DependanceController {
  constructor(private readonly dependanceService: DependanceService) {}

  @Get()
  findall() {
    return this.dependanceService.findAll();
  }

  @Get(':idDependance')
  findOneById(@Param('idDependance') idDependance: string) {
    return this.dependanceService.findById(idDependance);
  }

  @Post()
  create(@Body() dto: CreateDependanceDto) {
    return this.dependanceService.create(dto);
  }
}
