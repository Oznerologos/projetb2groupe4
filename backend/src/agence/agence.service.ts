import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agence } from './agence.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class AgenceService {
  constructor(
    @InjectRepository(Agence)
    private readonly agenceRepository: Repository<Agence>,
  ) {}

  findAll() {
    return this.agenceRepository.find();
  }

  findById(id: string) {
    return this.agenceRepository.findOne({ agenceId: id });
  }

  async create(data: Partial<Agence>) {
    const agence = new Agence(data);
    const agenceInserted = await this.agenceRepository.save(agence);
    return this.agenceRepository.findOne({
      agenceId: agenceInserted.agenceId,
    });
  }

  async update(agenceId: string, agence: Partial<Agence>): Promise<Agence> {
    await this.agenceRepository.update(agenceId, agence);

    return this.agenceRepository.findOne(agenceId, {
      relations: ['biens'],
    });
  }

  async delete(id): Promise<DeleteResult> {
    return await this.agenceRepository.delete(id);
  }
}
