import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proposition } from './proposition.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropositionService {
  constructor(
    @InjectRepository(Proposition)
    private readonly propositionRepository: Repository<Proposition>,
  ) {}

  findAll() {
    return this.propositionRepository.find();
  }

  findById(id: string) {
    return this.propositionRepository.findOne({ propositionId: id });
  }

  async create(data: Partial<Proposition>) {
    const proposition = new Proposition(data);
    const propositionInserted = await this.propositionRepository.save(
      proposition,
    );
    return this.propositionRepository.findOne({
      propositionId: propositionInserted.propositionId,
    });
  }
}
