import { EntityRepository, Repository } from 'typeorm';

import { Utilisateur } from './utilisateur.entity';

@EntityRepository(Utilisateur)
export class UtilisateurRepository extends Repository<Utilisateur> {}
