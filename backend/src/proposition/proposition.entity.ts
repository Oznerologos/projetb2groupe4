import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EnumValidite } from 'src/enum/validite.enum';
import { Client } from 'src/client/client.entity';
import { Bien } from 'src/bien/bien.entity';

@Entity({ name: 'proposition' })
export class Proposition {
  @PrimaryGeneratedColumn('uuid', { name: 'id_proposition' })
  idProposition: string;

  @Column({ name: 'date_proposition', type: 'date', nullable: false })
  DateProposition: Date;

  @Column({ name: 'prix_vendeur', type: 'float' })
  prixVendeur: number;

  @Column({ name: 'prix_acheteur', type: 'float' })
  prixAcheteur: number;

  @Column({ name: 'etat_proposition', type: 'enum', enum: EnumValidite })
  etatProposition: EnumValidite;

  @ManyToOne(type => Client, client => client.propositions)
  client: Client;

  @ManyToOne(type => Bien, bien => bien.propositions)
  bien: Bien;

  constructor(copy: Partial<Proposition> = {}) {
    this.idProposition = copy.idProposition || undefined;
    this.DateProposition = copy.DateProposition || new Date();
    this.prixVendeur = copy.prixVendeur || 0;
    this.prixAcheteur = copy.prixAcheteur || 0;
    this.etatProposition = copy.etatProposition || EnumValidite.NONE;
    this.client = copy.client || null;
    this.bien = copy.bien || null;
  }
}
