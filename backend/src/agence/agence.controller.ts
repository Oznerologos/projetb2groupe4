import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { AgenceService } from './agence.service';
import { AgencePostInDto } from './agence.dto';

@Controller('agence')
export class AgenceController {
  constructor(private readonly agenceService: AgenceService) {}

  @Get()
  findAll() {
    return this.agenceService.findAll();
  }

  @Get(':agenceId')
  findOneById(@Param('agenceId') agenceId: string) {
    return this.agenceService.findById(agenceId);
  }

  @Post()
  create(@Body() dto: AgencePostInDto) {
    return this.agenceService.create(dto);
  }
}
