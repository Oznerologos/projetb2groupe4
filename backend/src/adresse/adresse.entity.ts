import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'adresse' })
export class Adresse {
  @PrimaryGeneratedColumn('uuid', { name: 'id_adresse' })
  idAdresse: string;

  @Column({ name: 'code_postal', type: 'varchar', length: 20, nullable: false })
  codePostal: string;

  @Column({ name: 'nom_rue', type: 'varchar', length: 100, nullable: false })
  nomRue: string;

  @Column({ name: 'num_rue', type: 'varchar', length: 10 })
  numRue: string;

  constructor(copy: Partial<Adresse> = {}) {
    this.idAdresse = copy.idAdresse || undefined;

    this.codePostal = copy.codePostal;
    this.nomRue = copy.nomRue;
    this.numRue = copy.numRue || null;
  }
}
