import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionPostInDto } from './proposition.dto';

@Controller('proposition')
export class PropositionController {
  constructor(private readonly propositionService: PropositionService) {}

  @Get()
  findAll() {
    return this.propositionService.findAll();
  }

  @Get(':propositionId')
  findOneById(@Param('propositionId') propositionId: string) {
    return this.propositionService.findById(propositionId);
  }

  @Post()
  create(@Body() dto: PropositionPostInDto) {
    return this.propositionService.create(dto);
  }
}
