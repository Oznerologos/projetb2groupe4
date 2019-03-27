import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { MdpService } from './mdp.service';
import { MdpPostInDto } from './mdp.dto';

@Controller('mdp')
export class MdpController {
  constructor(private readonly mdpService: MdpService) {}

  @Get()
  findAll() {
    return this.mdpService.findAll();
  }

  @Get(':idMdp')
  findOneById(@Param('idMdp') idMdp: string) {
    return this.mdpService.findById(idMdp);
  }

  @Post()
  create(@Body() dto: MdpPostInDto) {
    return this.mdpService.create(dto);
  }
}
