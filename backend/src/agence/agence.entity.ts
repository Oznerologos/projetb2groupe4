import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Bien } from 'src/bien/bien.entity';
import { Adresse } from 'src/adresse/adresse.entity';

@Entity({ name: 'agence' })
export class Agence {
  @PrimaryGeneratedColumn('uuid', { name: 'agence_id' })
  agenceId: string;

  @Column({ name: 'agence_mail', type: 'varchar', length: 50 })
  agenceMail: string;

  @Column({ name: 'agence_tel', type: 'varchar', length: 20 })
  agenceTel: string;

  @Column({ name: 'agence_frais', type: 'float' })
  agenceFrais: number;

  @OneToMany(() => Bien, bien => bien.agence)
  biens: Bien[];

  @ManyToOne(() => Adresse, adresse => adresse.agences)
  @JoinColumn({ name: 'adresse_id' })
  adresse: Adresse;
  @Column({ name: 'adresse_id', type: 'uuid', nullable: false })
  adresseId: string;

  constructor(copy: Partial<Agence> = {}) {
    this.agenceId = copy.agenceId || undefined;

    this.agenceMail = copy.agenceMail || null;
    this.agenceTel = copy.agenceTel || null;
    this.agenceFrais = copy.agenceFrais || 0;

    this.biens = copy.biens || null;
    this.adresse = copy.adresse || null;
  }
}
