import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { MdpService } from './mdp.service';
import { MdpPostInDto } from './mdp.dto';
import { Mdp } from './mdp.entity';

@Controller('mdp')
export class MdpController {
  constructor(private readonly mdpService: MdpService) {}

  @Get()
  findAll() {
    return this.mdpService.findAll();
  }

  @Get(':mdpId')
  findOneById(@Param('mdpId') mdpId: string) {
    return this.mdpService.findById(mdpId);
  }

  @Post()
  create(@Body() dto: MdpPostInDto) {
    return this.mdpService.create(dto);
  }

  @Put(':mdpId/update')
  async update(
    @Param('mdpId') mdpId: string,
    @Body() dto: MdpPostInDto,
  ): Promise<Mdp> {
    return this.mdpService.update(mdpId, dto);
  }

  @Delete(':mdpId/delete')
  async delete(@Param('mdpId') mdpId): Promise<any> {
    return this.mdpService.delete(mdpId);
  }
}
