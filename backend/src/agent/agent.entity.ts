import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Agence } from 'src/agence/agence.entity';
import { Bien } from 'src/bien/bien.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';

@Entity({ name: 'agent' })
export class Agent {
  @PrimaryGeneratedColumn('uuid', { name: 'id_agent' })
  idAgent: string;

  @Column({ name: 'description_agent', type: 'varchar' })
  descriptionAgent: string;

  @OneToOne(type => Agence)
  @JoinColumn()
  agence: Agence;

  @OneToMany(type => Bien, bien => bien.agent)
  biens: Bien[];

  @ManyToOne(type => Utilisateur, utilisateur => utilisateur.agents)
  utilisateur: Utilisateur;

  constructor(copy: Partial<Agent> = {}) {
    this.idAgent = copy.idAgent || undefined;

    this.descriptionAgent = copy.descriptionAgent || null;
  }
}
