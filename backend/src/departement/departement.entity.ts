import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ville } from 'src/ville/ville.entity';

@Entity({ name: 'departement' })
export class Departement {
  @PrimaryGeneratedColumn('uuid', { name: 'departement_id' })
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
