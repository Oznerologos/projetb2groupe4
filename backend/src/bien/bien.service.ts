import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bien } from './bien.entity';
import { Repository, DeleteResult } from 'typeorm';

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

  async update(bienId: string, bien: Partial<Bien>): Promise<Bien> {
    await this.bienRepository.update(bienId, bien);

    return this.bienRepository.findOne(bienId, {
      relations: ['propositions', 'images', 'dependances'],
    });
  }

  async delete(id): Promise<DeleteResult> {
    return await this.bienRepository.delete(id);
  }
}
