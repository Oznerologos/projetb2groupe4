import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  constructor(copy: Partial<Departement> = {}) {
    this.idDepartement = copy.idDepartement || undefined;

    this.nomDepartement = copy.nomDepartement;
  }
}
