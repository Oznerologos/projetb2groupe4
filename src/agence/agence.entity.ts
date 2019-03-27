import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'agence' })
export class Agence {
  @PrimaryGeneratedColumn('uuid', { name: 'id_agence' })
  idAgence: string;

  @Column({ name: 'mail_agence', type: 'varchar', length: 50 })
  mailAgence: string;

  @Column({ name: 'tel_agence', type: 'varchar', length: 20 })
  telAgence: string;

  @Column({ name: 'frais_agence', type: 'float' })
  fraisAgence: number;

  constructor(copy: Partial<Agence> = {}) {
    this.idAgence = copy.idAgence || undefined;

    this.mailAgence = copy.mailAgence || null;
    this.telAgence = copy.telAgence || null;
    this.fraisAgence = copy.fraisAgence || 0;
  }
}
