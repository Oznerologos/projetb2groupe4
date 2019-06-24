import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm';
import { Ville } from '../ville/ville.entity';

@Entity({ name: 'departement' })
export class Departement {
  @PrimaryColumn({ name: 'departement_id', type: 'varchar' })
  departementId: string;

  @Column({
    name: 'departement_nom',
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  departementNom: string;

  @OneToMany(() => Ville, ville => ville.departement)
  villes: Ville[];

  constructor(copy: Partial<Departement> = {}) {
    this.departementId = copy.departementId || undefined;

    this.departementNom = copy.departementNom || null;

    this.villes = copy.villes || null;
  }
}
