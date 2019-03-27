import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentPostInDto } from './agent.dto';

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
}
