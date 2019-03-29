import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { EnumTypeBien } from 'src/enum/type-bien.enum';
import { EnumEtatBien } from 'src/enum/etat-bien.enum';
import { Dependance } from 'src/dependance/dependance.entity';
import { Image } from 'src/image/image.entity';
import { Agent } from 'src/agent/agent.entity';
import { Agence } from 'src/agence/agence.entity';
import { Proposition } from 'src/proposition/proposition.entity';
import { Client } from 'src/client/client.entity';

@Entity({ name: 'bien' }) // On lui dit que tout ce qu'il y a dedans se trouve dans une entité.
export class Bien {
  @PrimaryGeneratedColumn('uuid', { name: 'bien_id' }) // On créer les colonnes de l'entité, et la primary
  bienId: string;

  @Column({ name: 'bien_etage', type: 'int', nullable: false })
  bienEtage: number;

  @Column({ name: 'bien_descriptif', type: 'text', nullable: false })
  bienDescriptif: string;

  @Column({ name: 'bien_prix_min', type: 'float', nullable: false })
  bienPrixMin: number;

  @Column({ name: 'bien_prix_de_vente', type: 'float', nullable: false })
  bienPrixDeVente: number;

  @Column({ name: 'bien_nb_piece', type: 'int', nullable: false })
  bienNbPiece: number;

  @Column({ name: 'bien_superficie', type: 'float', nullable: false })
  bienSuperficie: number;

  @Column({
    name: 'bien_type',
    type: 'enum',
    enum: EnumTypeBien,
    nullable: false,
  })
  bienType: EnumTypeBien; // enum

  @Column({
    name: 'bien_etat',
    type: 'enum',
    enum: EnumEtatBien,
    nullable: false,
  })
  bienEtat: EnumEtatBien; // enum

  @Column({ name: 'bien_titre', type: 'varchar', nullable: false })
  bienTitre: string;

  @OneToMany(() => Dependance, dependance => dependance.bien)
  dependances: Dependance[];

  @OneToMany(() => Image, image => image.bien)
  images: Image[];

  @ManyToOne(() => Agent, agent => agent.biens)
  @JoinColumn({ name: 'agent_id' })
  agent: Agent;
  @Column({ name: 'agent_id', type: 'uuid', nullable: false })
  agentId: string;

  @ManyToOne(() => Agence, agence => agence.biens)
  @JoinColumn({ name: 'agence_id' })
  agence: Agence;
  @Column({ name: 'agence_id', type: 'uuid', nullable: false })
  agenceId: string;

  @ManyToOne(() => Client, client => client.biens)
  @JoinColumn({ name: 'client_id' })
  client: Client;
  @Column({ name: 'client_id', type: 'uuid', nullable: false })
  clientId: string;

  @OneToMany(() => Proposition, proposition => proposition.bien)
  propositions: Proposition[];

  @ManyToMany(() => Client, client => client.biensFavoris)
  @JoinTable()
  clients: Client[];

  constructor(copy: Partial<Bien> = {}) {
    // on met les choix par defaut

    this.bienId = copy.bienId || undefined;

    this.bienEtage = copy.bienEtage || 0;

    this.bienDescriptif = copy.bienDescriptif || null;

    this.bienPrixMin = copy.bienPrixMin || 0;

    this.bienPrixDeVente = copy.bienPrixDeVente || 0;

    this.bienNbPiece = copy.bienNbPiece || 0;

    this.bienSuperficie = copy.bienSuperficie || 0;

    this.bienType = copy.bienType || EnumTypeBien.NONE;

    this.bienEtat = copy.bienEtat || EnumEtatBien.NONE;

    this.bienTitre = copy.bienTitre || null;

    this.dependances = copy.dependances || null;

    this.images = copy.images || null;

    this.agent = copy.agent || null;

    this.agence = copy.agence || null;

    this.client = copy.client || null;

    this.clients = copy.clients || null;
  }
}
