import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bien } from './bien.entity';
import { Repository, DeleteResult, Like, Between } from 'typeorm';
import { SearchBienDto } from './search.dto';
import { agent } from 'supertest';

@Injectable()
export class BienService {
  constructor(
    @InjectRepository(Bien)
    private readonly bienRepository: Repository<Bien>,
  ) {}

  findAll() {
    return this.bienRepository.find();
  }

  findByUtilisateur(clientId: string, agentId: string) {
    if (clientId == '' && agentId == '') {
      return null;
    }
    return clientId == ''
      ? this.bienRepository.find({
          bienAgent: agentId,
        })
      : this.bienRepository.find({ bienClient: clientId });
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

  findByParams(params: Partial<SearchBienDto>) {
    return this.bienRepository.find({
      bienPrixDeVente: Between(
        params.bienPrixDeVenteMin,
        params.bienPrixDeVenteMax,
      ),
      bienNbPiece: Between(params.bienNbPieceMin, params.bienNbPieceMax),
      bienSuperficie: Between(
        params.bienSuperficieMin,
        params.bienSuperficieMax,
      ),
      bienEtat: params.bienEtat,
      bienType: params.bienType,
      bienTitre: Like('%' + params.bienTitre + '%'),
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
