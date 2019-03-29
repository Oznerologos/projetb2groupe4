import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from './agent.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ) {}

  findAll() {
    return this.agentRepository.find();
  }

  findById(id: string) {
    return this.agentRepository.findOne({ agentId: id });
  }

  async create(data: Partial<Agent>) {
    const agent = new Agent(data);
    const agentInserted = await this.agentRepository.save(agent);
    return this.agentRepository.findOne({
      agentId: agentInserted.agentId,
    });
  }

  async update(agent: Agent): Promise<UpdateResult> {
    return await this.agentRepository.update(agent.agentId, agent);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.agentRepository.delete(id);
  }
}
