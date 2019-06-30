import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Agence } from '../agence/agence.entity';
import { Bien } from '../bien/bien.entity';
import { Utilisateur } from '../utilisateur/utilisateur.entity';

@Entity({ name: 'agent' })
export class Agent {
  @PrimaryGeneratedColumn('uuid', { name: 'agent_id' })
  agentId: string;

  @Column({ name: 'agent_description', type: 'varchar' })
  agentDescription: string;

  @OneToOne(() => Utilisateur, utilisateur => utilisateur.agent)
  @JoinColumn({ name: 'utilisateur_id' })
  utilisateur: Utilisateur;
  @Column({ name: 'utilisateur_id', type: 'uuid', nullable: false })
  agentUtilisateur: string;

  @OneToMany(() => Bien, bien => bien.agent)
  biens: Bien[];

  @ManyToOne(() => Agence, agence => agence.agents)
  @JoinColumn({ name: 'agence_id' })
  agence: Agence;
  @Column({ name: 'agence_id', type: 'uuid', nullable: false })
  agentAgence: string;

  constructor(copy: Partial<Agent> = {}) {
    this.agentId = copy.agentId || undefined;

    this.agentDescription = copy.agentDescription || null;

    this.agentAgence = copy.agentAgence || null;
    this.biens = copy.biens || null;
    this.agentUtilisateur = copy.agentUtilisateur || null;
    this.agence = copy.agence || null;
  }
}
