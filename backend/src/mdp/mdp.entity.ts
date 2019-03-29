import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';

@Entity({ name: 'mdp' })
export class Mdp {
  @PrimaryGeneratedColumn('uuid', { name: 'mdp_id' })
  mdpId: string;

  @Column({ name: 'mdp', type: 'varchar', length: 50, nullable: false })
  mdp: string;

  @OneToOne(type => Utilisateur)
  @JoinColumn()
  utilisateur: Utilisateur;

  constructor(copy: Partial<Mdp> = {}) {
    this.mdpId = copy.mdpId || undefined;

    this.mdp = copy.mdp || null;

    this.utilisateur = copy.utilisateur || null;
  }
}
