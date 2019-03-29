import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bien } from './bien.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

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

  async update(bien: Bien): Promise<UpdateResult> {
    return await this.bienRepository.update(bien.bienId, bien);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.bienRepository.delete(id);
  }
}
