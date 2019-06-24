import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ville } from './ville.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class VilleService {
  constructor(
    @InjectRepository(Ville)
    private readonly villeRepository: Repository<Ville>,
  ) {}

  findAll() {
    return this.villeRepository.find();
  }

  findById(id: number) {
    return this.villeRepository.findOne({ villeId: id });
  }

  async create(data: Partial<Ville>) {
    const ville = new Ville(data);
    const villeInserted = await this.villeRepository.save(ville);
    return this.villeRepository.findOne({ villeId: villeInserted.villeId });
  }

  async update(villeId: string, ville: Partial<Ville>): Promise<Ville> {
    await this.villeRepository.update(villeId, ville);

    return this.villeRepository.findOne(villeId);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.villeRepository.delete(id);
  }
}
