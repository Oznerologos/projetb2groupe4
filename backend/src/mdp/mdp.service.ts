import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MotDePasse } from './mot-de-passe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MotDePasseService {
  constructor(
    @InjectRepository(MotDePasse)
    private readonly motDePasseRepository: Repository<MotDePasse>,
  ) {}

  findAll() {
    return this.motDePasseRepository.find();
  }

  findById(id: string) {
    return this.motDePasseRepository.findOne({ idMotDePasse: id });
  }

  async create(data: Partial<MotDePasse>) {
    const motDePasse = new MotDePasse(data);
    const motDePasseInserted = await this.motDePasseRepository.save(motDePasse);
    return this.motDePasseRepository.findOne({
      idMotDePasse: motDePasseInserted.idMotDePasse,
    });
  }
}
