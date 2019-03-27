import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'ville' })
export class Ville {
  @PrimaryGeneratedColumn('uuid', { name: 'id_ville' })
  idVille: string;

  @Column({ name: 'nom_ville', type: 'varchar', length: 50, nullable: false })
  nomVille: string;

  @Column({ name: 'code_postal', type: 'varchar', length: 20, nullable: false })
  codePostal: string;

  @Column({ name: 'longitude', type: 'float', length: 20, nullable: false })
  longitude: number;

  @Column({ name: 'latitude', type: 'float', length: 20, nullable: false })
  latitude: number;

  constructor(copy: Partial<Ville> = {}) {
    this.idVille = copy.idVille || undefined;

    this.nomVille = copy.nomVille || null;
    this.codePostal = copy.codePostal || null;
    this.longitude = copy.longitude || 0;
    this.latitude = copy.latitude || 0;
  }
}
