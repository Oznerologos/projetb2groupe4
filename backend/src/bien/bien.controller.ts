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

@Controller('bien')
export class BienController {
  constructor(private readonly bienService: BienService) {}

  @Get()
  findAll() {
    return this.bienService.findAll();
  }

  @Get(':bienId')
  findOneById(@Param('bienId') bienId: string) {
    return this.bienService.findById(bienId);
  }

  @Post()
  create(@Body() dto: BienPostInDto) {
    return this.bienService.create(dto);
  }

  @Put(':bienId/update')
  async update(@Param('bienId') bienId, @Body() dto: Bien): Promise<any> {
    dto.bienId = String(bienId);
    // console.log('Update #' + dto.bienId);
    return this.bienService.update(dto);
  }

  @Delete(':bienId/delete')
  async delete(@Param('bienId') bienId): Promise<any> {
    return this.bienService.delete(bienId);
  }
}
