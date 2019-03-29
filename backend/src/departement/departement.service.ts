import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './departement.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DepartementService {
  constructor(
    @InjectRepository(Departement)
    private readonly departementRepository: Repository<Departement>,
  ) {}

  findAll() {
    return this.departementRepository.find();
  }

  findById(id: string) {
    return this.departementRepository.findOne({ departementId: id });
  }

  async create(data: Partial<Departement>) {
    const departement = new Departement(data);
    const departementInserted = await this.departementRepository.save(
      departement,
    );
    return this.departementRepository.findOne({
      departementId: departementInserted.departementId,
    });
  }

  async update(
    departementId: string,
    departement: Partial<Departement>,
  ): Promise<Departement> {
    await this.departementRepository.update(departementId, departement);

    return this.departementRepository.findOne(departementId, {
      relations: ['villes'],
    });
  }

  async delete(id): Promise<DeleteResult> {
    return await this.departementRepository.delete(id);
  }
}
