import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ville' })
export class Ville {
  @PrimaryGeneratedColumn('uuid', { name: 'id_ville' })
  idVille: string;

  @Column({ name: 'nom_ville', type: 'varchar', length: 50 })
  nomVille: string;

  @Column({ name: 'code_postal', type: 'varchar', length: 20 })
  codePostal: string;

  @Column({ name: 'longitude', type: 'float', length: 20 })
  longitude: number;

  @Column({ name: 'latitude', type: 'float', length: 20 })
  latitude: number;

  constructor(copy: Partial<Ville> = {}) {
    this.idVille = copy.idVille || undefined;

    this.nomVille = copy.nomVille;
    this.codePostal = copy.codePostal;
    this.longitude = copy.longitude;
    this.latitude = copy.latitude;
  }
}
