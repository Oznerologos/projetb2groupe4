import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proposition } from './proposition.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class PropositionService {
  constructor(
    @InjectRepository(Proposition)
    private readonly propositionRepository: Repository<Proposition>,
  ) {}

  findAll() {
    return this.propositionRepository.find();
  }

  findByBien(bienId: string) {
    return this.propositionRepository.find({ propositionBien: bienId });
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

  async update(
    propositionId: string,
    proposition: Partial<Proposition>,
  ): Promise<Proposition> {
    await this.propositionRepository.update(propositionId, proposition);

    return this.propositionRepository.findOne(propositionId);
  }

  async delete(propositionId): Promise<DeleteResult> {
    return await this.propositionRepository.delete(propositionId);
  }
}
