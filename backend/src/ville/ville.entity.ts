import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Departement } from 'src/departement/departement.entity';
import { Adresse } from 'src/adresse/adresse.entity';

@Entity({ name: 'ville' })
export class Ville {
  @PrimaryGeneratedColumn('uuid', { name: 'ville_id' })
  villeId: string;

  @Column({ name: 'ville_nom', type: 'varchar', length: 50, nullable: false })
  villeNom: string;

  @Column({
    name: 'ville_code_postal',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  villeCodePostal: string;

  @Column({ name: 'ville_longitude', type: 'float', nullable: false })
  villeLongitude: number;

  @Column({ name: 'ville_latitude', type: 'float', nullable: false })
  villeLatitude: number;

  @ManyToOne(() => Departement, departement => departement.villes)
  @JoinColumn({ name: 'departement_id' })
  departement: Departement;
  @Column({ name: 'departement_id', type: 'uuid', nullable: false })
  villeDepartement: string;

  @OneToMany(() => Adresse, adresse => adresse.ville)
  adresses: Adresse[];

  constructor(copy: Partial<Ville> = {}) {
    this.villeId = copy.villeId || undefined;

    this.villeNom = copy.villeNom || null;
    this.villeCodePostal = copy.villeCodePostal || null;
    this.villeLongitude = copy.villeLongitude || 0;
    this.villeLatitude = copy.villeLatitude || 0;

    this.villeDepartement = copy.villeDepartement || null;
  }
}
