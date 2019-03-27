import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { constructor } from 'connect';
import { Utilisateur } from './Utilisateur.entity';

@Injectable()
export class UtilisateurService {
    constructor(

        @InjectRepository(Utilisateur)
        private readonly utilisateurRepository: Repository<Utilisateur>,
    )  {}   

    findAll(){
        return this.utilisateurRepository.find();
    }

    findById(id: string) {
        return this.utilisateurRepository.findOne({ id_utilisateur: id });
    }

    async create(data: Partial<Utilisateur>){ // On Save les user qui sont insérés.
        const utilisateur = new Utilisateur(data);
        const utilisateurInserted = await this.utilisateurRepository.save(utilisateur);
        return this.utilisateurRepository.findOne({id_utilisateur: utilisateurInserted.id_utilisateur});
    }
}
