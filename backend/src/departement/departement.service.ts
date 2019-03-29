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

  async update(departement: Departement): Promise<UpdateResult> {
    return await this.departementRepository.update(
      departement.departementId,
      departement,
    );
  }

  async delete(id): Promise<DeleteResult> {
    return await this.departementRepository.delete(id);
  }
}
