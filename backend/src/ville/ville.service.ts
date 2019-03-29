import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ville } from './ville.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VilleService {
  constructor(
    @InjectRepository(Ville)
    private readonly villeRepository: Repository<Ville>,
  ) {}

  findAll() {
    return this.villeRepository.find();
  }

  findById(id: string) {
    return this.villeRepository.findOne({ villeId: id });
  }

  async create(data: Partial<Ville>) {
    const ville = new Ville(data);
    const villeInserted = await this.villeRepository.save(ville);
    return this.villeRepository.findOne({ villeId: villeInserted.villeId });
  }
}
