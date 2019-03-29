import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mdp } from './mdp.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class MdpService {
  constructor(
    @InjectRepository(Mdp)
    private readonly mdpRepository: Repository<Mdp>,
  ) {}

  findAll() {
    return this.mdpRepository.find();
  }

  findById(id: string) {
    return this.mdpRepository.findOne({ mdpId: id });
  }

  async create(data: Partial<Mdp>) {
    const mdp = new Mdp(data);
    const mdpInserted = await this.mdpRepository.save(mdp);
    return this.mdpRepository.findOne({
      mdpId: mdpInserted.mdpId,
    });
  }

  async update(mdpId: string, mdp: Partial<Mdp>): Promise<Mdp> {
    await this.mdpRepository.update(mdpId, mdp);

    return this.mdpRepository.findOne(mdpId);
  }
  async delete(mdpId): Promise<DeleteResult> {
    return await this.mdpRepository.delete(mdpId);
  }
}
