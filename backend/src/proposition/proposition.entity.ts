import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EnumValidite } from 'src/enum/validite.enum';
import { Client } from 'src/client/client.entity';
import { Bien } from 'src/bien/bien.entity';

@Entity({ name: 'proposition' })
export class Proposition {
  @PrimaryGeneratedColumn('uuid', { name: 'proposition_id' })
  propositionId: string;

  @Column({ name: 'proposition_date', type: 'date', nullable: false })
  propositionDate: Date;

  @Column({ name: 'proposition_prix_vendeur', type: 'float' })
  propositionPrixVendeur: number;

  @Column({ name: 'proposition_prix_acheteur', type: 'float' })
  propositionPrixAcheteur: number;

  @Column({ name: 'proposition_etat', type: 'enum', enum: EnumValidite })
  propositionEtat: EnumValidite;

  @ManyToOne(() => Client, client => client.propositions)
  @JoinColumn({ name: 'client_id' })
  client: Client;
  @Column({ name: 'client_id', type: 'uuid', nullable: false })
  propositionClient: string;

  @ManyToOne(() => Bien, bien => bien.propositions)
  @JoinColumn({ name: 'bien_id' })
  bien: Bien;
  @Column({ name: 'bien_id', type: 'uuid', nullable: false })
  propositionBien: string;

  @Column({ name: 'message_proposition', type: 'varchar' })
  propositionMessage: string;

  constructor(copy: Partial<Proposition> = {}) {
    this.propositionId = copy.propositionId || undefined;

    this.propositionDate = copy.propositionDate || new Date();
    this.propositionPrixVendeur = copy.propositionPrixVendeur || 0;
    this.propositionPrixAcheteur = copy.propositionPrixAcheteur || 0;
    this.propositionEtat = copy.propositionEtat || EnumValidite.NONE;
    this.propositionClient = copy.propositionClient || null;
    this.propositionBien = copy.propositionBien || null;
    this.propositionMessage = copy.propositionMessage || null;
  }
}
