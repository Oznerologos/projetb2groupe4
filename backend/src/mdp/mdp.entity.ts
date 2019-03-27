import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'mdp' })
export class Mdp {
  @PrimaryGeneratedColumn('uuid', { name: 'id_mdp' })
  idMdp: string;

  @Column({ name: 'mdp', type: 'varchar', length: 50, nullable: false })
  mdp: string;

  constructor(copy: Partial<Mdp> = {}) {
    this.idMdp = copy.idMdp || undefined;

    this.mdp = copy.mdp || null;
  }
}
