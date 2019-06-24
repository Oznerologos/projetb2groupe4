import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bien } from './bien.entity';
import { Repository, DeleteResult, Like } from 'typeorm';
import { SearchBienDto } from './search.dto';

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

  findByName(name: string) {
    if (name == 'getAllBien') {
      name = '';
    }
    return this.bienRepository.find({ bienTitre: Like('%' + name + '%') });
  }

  findByParameter(parametres: Partial<SearchBienDto>) {
    return this.bienRepository.find({
      bienTitre: Like('%' + parametres.bienTitre + '%'),
      bienType: parametres.bienType,
      //bienNbPiece: parametres.bienNbPieceMin >= bienNbPiece,
    });
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
