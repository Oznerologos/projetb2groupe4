import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientPostInDto } from './client.dto';
import { Client } from './client.entity';

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

  @Put(':clientId/update')
  async update(
    @Param('clientId') clientId: string,
    @Body() dto: ClientPostInDto,
  ): Promise<Client> {
    return this.clientService.update(clientId, dto);
  }

  @Delete(':clientId/delete')
  async delete(@Param('clientId') clientId): Promise<any> {
    return this.clientService.delete(clientId);
  }
}
