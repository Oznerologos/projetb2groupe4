import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EnumValidite } from 'src/enum/validite.enum';

@Entity({ name: 'proposition' })
export class Proposition {
  @PrimaryGeneratedColumn('uuid', { name: 'id_proposition' })
  idProposition: string;

  @Column({ name: 'date_proposition', type: 'date', nullable: false })
  DateProposition: string;

  @Column({ name: 'prix_vendeur', type: 'float', length: 20 })
  prixVendeur: number;

  @Column({ name: 'prix_acheteur', type: 'float', length: 20 })
  prixAcheteur: number;

  @Column({ name: 'etat_proposition', type: 'enum', enum: EnumValidite })
  etatProposition: EnumValidite;

  constructor(copy: Partial<Proposition> = {}) {
    this.idProposition = copy.idProposition || undefined;

    this.DateProposition = copy.DateProposition || Date();
    this.prixVendeur = copy.prixVendeur || 0;
    this.prixAcheteur = copy.prixAcheteur || 0;
    this.etatProposition = copy.etatProposition || EnumValidite.NONE;
  }
}
