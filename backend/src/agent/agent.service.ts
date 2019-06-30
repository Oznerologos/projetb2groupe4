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

  findByUtilisateur(id: string) {
    return this.agentRepository.findOne({ agentUtilisateur: id });
  }

  async findFirst() {
    let agents: Agent[] = await this.agentRepository.find();
    return agents[0];
  }

  async create(data: Partial<Agent>) {
    const agent = new Agent(data);
    const agentInserted = await this.agentRepository.save(agent);
    return this.agentRepository.findOne({
      agentId: agentInserted.agentId,
    });
  }

  async update(agentId: string, agent: Partial<Agent>): Promise<Agent> {
    await this.agentRepository.update(agentId, agent);

    return this.agentRepository.findOne(agentId, {
      relations: ['biens'],
    });
  }

  async delete(id): Promise<DeleteResult> {
    return await this.agentRepository.delete(id);
  }
}
