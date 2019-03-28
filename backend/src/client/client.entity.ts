import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Proposition } from 'src/proposition/proposition.entity';
import { Bien } from 'src/bien/bien.entity';
import { Utilisateur } from 'src/utilisateur/Utilisateur.entity';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn('uuid', { name: 'id_client' })
  idClient: string;

  @Column('uuid', { name: 'num_parrainage' })
  numParrainage: string;

  @OneToMany(type => Proposition, proposition => proposition.client)
  propositions: Proposition[];

  @OneToMany(type => Bien, bien => bien.client)
  biens: Bien[];

  @ManyToOne(type => Utilisateur, utilisateur => utilisateur.clients)
  utilisateur: Utilisateur;

  @ManyToMany(type => Bien, bien => bien.clients)
  biensFavoris: Bien[];

  constructor(copy: Partial<Client> = {}) {
    this.idClient = copy.idClient || undefined;

    this.numParrainage = copy.numParrainage || null;
    this.propositions = copy.propositions || null;
    this.biens = copy.biens || null;
    this.utilisateur = copy.utilisateur || null;
    this.biensFavoris = copy.biensFavoris || null;
  }
}
