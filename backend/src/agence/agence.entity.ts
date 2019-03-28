import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Bien } from 'src/bien/bien.entity';
import { Adresse } from 'src/adresse/adresse.entity';

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

  @OneToMany(type => Bien, bien => bien.agence)
  biens: Bien[];

  @ManyToOne(type => Adresse, adresse => adresse.agences)
  adresse: Adresse;

  constructor(copy: Partial<Agence> = {}) {
    this.idAgence = copy.idAgence || undefined;

    this.mailAgence = copy.mailAgence || null;
    this.telAgence = copy.telAgence || null;
    this.fraisAgence = copy.fraisAgence || 0;

    this.biens = copy.biens || null;
    this.adresse = copy.adresse || null;
  }
}
