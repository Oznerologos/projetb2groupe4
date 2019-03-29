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
  @PrimaryGeneratedColumn('uuid', { name: 'agent_id' })
  agentId: string;

  @Column({ name: 'agent_description', type: 'varchar' })
  agentDescription: string;

  @OneToOne(() => Agence)
  @JoinColumn()
  agence: Agence;

  @OneToMany(() => Bien, bien => bien.agent)
  biens: Bien[];

  @ManyToOne(() => Utilisateur, utilisateur => utilisateur.agents)
  @JoinColumn({ name: 'utilisateur_id' })
  utilisateur: Utilisateur;

  @Column({ name: 'utilisateur_id', type: 'uuid', nullable: false })
  utilisateurId: Utilisateur;

  constructor(copy: Partial<Agent> = {}) {
    this.agentId = copy.agentId || undefined;

    this.agentDescription = copy.agentDescription || null;

    this.agence = copy.agence || null;
    this.biens = copy.biens || null;
    this.utilisateur = copy.utilisateur || null;
  }
}
