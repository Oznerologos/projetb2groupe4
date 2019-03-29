import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { PropositionService } from './proposition.service';
import { PropositionPostInDto } from './proposition.dto';
import { Proposition } from './proposition.entity';

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

  @Put(':propositionId/update')
  async update(
    @Param('propositionId') propositionId: string,
    @Body() dto: PropositionPostInDto,
  ): Promise<Proposition> {
    return this.propositionService.update(propositionId, dto);
  }

  @Delete(':propositionId/delete')
  async delete(@Param('propositionId') propositionId): Promise<any> {
    return this.propositionService.delete(propositionId);
  }
}
