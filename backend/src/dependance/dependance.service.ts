import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dependance } from './dependance.entity';

@Injectable()
export class DependanceService {
  constructor(
    @InjectRepository(Dependance)
    private readonly dependanceRepository: Repository<Dependance>,
  ) {}

  findAll() {
    return this.dependanceRepository.find();
  }

  findById(id: string) {
    return this.dependanceRepository.findOne({ dependanceId: id });
  }

  async create(data: Partial<Dependance>) {
    const dependance = new Dependance(data);
    const dependanceInserted = await this.dependanceRepository.save(dependance);
    return this.dependanceRepository.findOne({
      dependanceId: dependanceInserted.dependanceId,
    });
  }
}
