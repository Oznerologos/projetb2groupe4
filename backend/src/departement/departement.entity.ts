import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Ville } from 'src/ville/ville.entity';

@Entity({ name: 'departement' })
export class Departement {
  @PrimaryGeneratedColumn('uuid', { name: 'id_departement' })
  idDepartement: string;

  @Column({
    name: 'nom_departement',
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  nomDepartement: string;

  @OneToMany(() => Ville, ville => ville.departement)
  villes: Ville[];

  constructor(copy: Partial<Departement> = {}) {
    this.idDepartement = copy.idDepartement || undefined;

    this.nomDepartement = copy.nomDepartement || null;

    this.villes = copy.villes || null;
  }
}
