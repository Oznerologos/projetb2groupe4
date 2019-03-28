import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';

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
    return this.utilisateurRepository.findOne({ idUtilisateur: id });
  }

  async create(data: Partial<Utilisateur>) {
    // On Save les user qui sont insérés.
    const utilisateur = new Utilisateur(data);
    const utilisateurInserted = await this.utilisateurRepository.save(
      utilisateur,
    );
    return this.utilisateurRepository.findOne({
      idUtilisateur: utilisateurInserted.idUtilisateur,
    });
  }
}
