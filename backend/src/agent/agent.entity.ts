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

  @ManyToOne(() => Utilisateur, utilisateur => utilisateur.agents)
  @JoinColumn({ name: 'utilisateur_id' })
  utilisateur: Utilisateur;

  @Column({ name: 'utilisateur_id', type: 'uuid', nullable: false })
  utilisateurId: string;

  @OneToMany(() => Bien, bien => bien.agent)
  biens: Bien[];

  @ManyToOne(() => Agence, agence => agence.agents)
  @JoinColumn({ name: 'agence_id' })
  agence: Agence;
  @Column({ name: 'agence_id', type: 'uuid', nullable: true })
  agentAgence: string;

  /*
  @OneToOne(() => Agence)
  @JoinColumn()
  agence: Agence;
  */

  constructor(copy: Partial<Agent> = {}) {
    this.agentId = copy.agentId || undefined;

    this.agentDescription = copy.agentDescription || null;

    this.agentAgence = copy.agentAgence || null;
    this.biens = copy.biens || null;
    this.utilisateur = copy.utilisateur || null;
    this.agence = copy.agence || null;
  }
}
