import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Adresse } from './adresse.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class AdresseService {
  constructor(
    @InjectRepository(Adresse)
    private readonly adresseRepository: Repository<Adresse>,
  ) {}

  findAll() {
    return this.adresseRepository.find();
  }

  findById(id: string) {
    return this.adresseRepository.findOne({ adresseId: id });
  }

  async create(data: Partial<Adresse>) {
    const adresse = new Adresse(data);
    const adresseInserted = await this.adresseRepository.save(adresse);
    return this.adresseRepository.findOne({
      adresseId: adresseInserted.adresseId,
    });
  }

  async update(adresse: Adresse): Promise<UpdateResult> {
    return await this.adresseRepository.update(adresse.adresseId, adresse);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.adresseRepository.delete(id);
  }
}
