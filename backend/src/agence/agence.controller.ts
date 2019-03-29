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

  @Put(':agenceId/update')
  async update(@Param('agenceId') agenceId, @Body() dto: Agence): Promise<any> {
    dto.agenceId = String(agenceId);
    // console.log('Update #' + dto.agenceId);
    return this.agenceService.update(dto);
  }

  @Delete(':agenceId/delete')
  async delete(@Param('agenceId') agenceId): Promise<any> {
    return this.agenceService.delete(agenceId);
  }
}
