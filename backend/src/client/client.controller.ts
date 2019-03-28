import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientPostInDto } from './client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':clientId')
  findOneById(@Param('clientId') clientId: string) {
    return this.clientService.findById(clientId);
  }

  @Post()
  create(@Body() dto: ClientPostInDto) {
    return this.clientService.create(dto);
  }
}
