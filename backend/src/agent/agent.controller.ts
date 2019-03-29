import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentPostInDto } from './agent.dto';
import { Agent } from './agent.entity';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Get()
  findAll() {
    return this.agentService.findAll();
  }

  @Get(':agentId')
  findOneById(@Param('agentId') agentId: string) {
    return this.agentService.findById(agentId);
  }

  @Post()
  create(@Body() dto: AgentPostInDto) {
    return this.agentService.create(dto);
  }

  @Put(':agentId/update')
  async update(
    @Param('agentId') agentId: string,
    @Body() dto: AgentPostInDto,
  ): Promise<Agent> {
    return this.agentService.update(agentId, dto);
  }

  @Delete(':agentId/delete')
  async delete(@Param('agentId') agentId): Promise<any> {
    return this.agentService.delete(agentId);
  }
}
