import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { BienService } from './bien.service';
import { BienPostInDto } from './bien-post-in-dto';

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
}
