import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Achat } from './achat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AchatService {
  constructor(
    @InjectRepository(Achat)
    private readonly achatRepository: Repository<Achat>,
  ) {} // le corps de la fonction de constructor ( c'est entre eu qu'on met les super)

  findAll() {
    return this.achatRepository.find();
  }

  findById(id: string) {
    return this.achatRepository.findOne({ idAchat: id });
  }

  async create(data: Partial<Achat>) {
    // On Save les photos qui sont insérés.
    const achat = new Achat(data);
    const achatInserted = await this.achatRepository.save(achat);
    return this.achatRepository.findOne({ idAchat: achatInserted.idAchat });
  }
}
