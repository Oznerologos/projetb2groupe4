import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Departement } from 'src/departement/departement.entity';
import { Adresse } from 'src/adresse/adresse.entity';

@Entity({ name: 'ville' })
export class Ville {
  @PrimaryGeneratedColumn('uuid', { name: 'id_ville' })
  idVille: string;

  @Column({ name: 'nom_ville', type: 'varchar', length: 50, nullable: false })
  nomVille: string;

  @Column({ name: 'code_postal', type: 'varchar', length: 20, nullable: false })
  codePostal: string;

  @Column({ name: 'longitude', type: 'float', nullable: false })
  longitude: number;

  @Column({ name: 'latitude', type: 'float', nullable: false })
  latitude: number;

  @ManyToOne(type => Departement, departement => departement.villes)
  departement: Departement;

  @OneToMany(type => Adresse, adresse => adresse.ville)
  adresses: Adresse[];

  constructor(copy: Partial<Ville> = {}) {
    this.idVille = copy.idVille || undefined;

    this.nomVille = copy.nomVille || null;
    this.codePostal = copy.codePostal || null;
    this.longitude = copy.longitude || 0;
    this.latitude = copy.latitude || 0;

    this.departement = copy.departement || null;
    this.adresses = copy.adresses || null;
  }
}
