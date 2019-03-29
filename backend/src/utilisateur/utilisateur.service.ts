import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(Utilisateur)
    private readonly utilisateurRepository: Repository<Utilisateur>,
  ) {}

  findAll() {
    return this.utilisateurRepository.find();
  }

  findById(id: string) {
    return this.utilisateurRepository.findOne({ utilisateurId: id });
  }

  async create(data: Partial<Utilisateur>) {
    const utilisateur = new Utilisateur(data);
    const utilisateurInserted = await this.utilisateurRepository.save(
      utilisateur,
    );
    return this.utilisateurRepository.findOne({
      utilisateurId: utilisateurInserted.utilisateurId,
    });
  }
}
