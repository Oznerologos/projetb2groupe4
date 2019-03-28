import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';

@Entity({ name: 'mdp' })
export class Mdp {
  @PrimaryGeneratedColumn('uuid', { name: 'id_mdp' })
  idMdp: string;

  @Column({ name: 'mdp', type: 'varchar', length: 50, nullable: false })
  mdp: string;

  @ManyToOne(type => Utilisateur, utilisateur => utilisateur.mdps)
  utilisateur: Utilisateur;

  constructor(copy: Partial<Mdp> = {}) {
    this.idMdp = copy.idMdp || undefined;

    this.mdp = copy.mdp || null;

    this.utilisateur = copy.utilisateur || null;
  }
}
