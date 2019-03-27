import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departement } from './departement.entity';
import { Repository } from 'typeorm';

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
    return this.departementRepository.findOne({ idDepartement: id });
  }

  async create(data: Partial<Departement>) {
    const departement = new Departement(data);
    const departementInserted = await this.departementRepository.save(
      departement,
    );
    return this.departementRepository.findOne({
      idDepartement: departementInserted.idDepartement,
    });
  }
}
