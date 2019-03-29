import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bien } from './bien.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BienService {
  constructor(
    @InjectRepository(Bien)
    private readonly bienRepository: Repository<Bien>,
  ) {}

  findAll() {
    return this.bienRepository.find();
  }

  findById(id: string) {
    return this.bienRepository.findOne({ bienId: id });
  }

  async create(data: Partial<Bien>) {
    const bien = new Bien(data);
    const bienInserted = await this.bienRepository.save(bien);
    return this.bienRepository.findOne({
      bienId: bienInserted.bienId,
    });
  }
}
