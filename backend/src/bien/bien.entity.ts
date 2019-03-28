import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
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
  @PrimaryGeneratedColumn('uuid', { name: 'id_bien' }) // On créer les colonnes de l'entité, et la primary
  idBien: string;

  @Column({ name: 'etage', type: 'int', nullable: false })
  etage: number;

  @Column({ name: 'descriptif', type: 'text', nullable: false })
  descriptif: string;

  @Column({ name: 'prix_min', type: 'float', nullable: false })
  prixMin: number;

  @Column({ name: 'prix_de_vente', type: 'float', nullable: false })
  prixDeVente: number;

  @Column({ name: 'nb_piece', type: 'int', nullable: false })
  nbPiece: number;

  @Column({ name: 'superficie_bien', type: 'float', nullable: false })
  superficieBien: number;

  @Column({
    name: 'type_bien',
    type: 'enum',
    enum: EnumTypeBien,
    nullable: false,
  })
  typeBien: EnumTypeBien; // enum

  @Column({
    name: 'etat_bien',
    type: 'enum',
    enum: EnumEtatBien,
    nullable: false,
  })
  etatBien: EnumEtatBien; // enum

  @Column({ name: 'titre_bien', type: 'varchar', nullable: false })
  titreBien: string;

  @OneToMany(type => Dependance, dependance => dependance.bien)
  dependances: Dependance[];

  @OneToMany(type => Image, image => image.bien)
  images: Image[];

  @ManyToOne(type => Agent, agent => agent.biens)
  agent: Agent;

  @ManyToOne(type => Agence, agence => agence.biens)
  agence: Agence;

  @OneToMany(type => Proposition, proposition => proposition.bien)
  propositions: Proposition[];

  @ManyToOne(type => Client, client => client.biens)
  client: Client;

  constructor(copy: Partial<Bien> = {}) {
    // on met les choix par defaut

    this.idBien = copy.idBien || undefined;

    this.etage = copy.etage || 0;

    this.descriptif = copy.descriptif || null;

    this.prixMin = copy.prixMin || 0;

    this.prixDeVente = copy.prixDeVente || 0;

    this.nbPiece = copy.nbPiece || 0;

    this.superficieBien = copy.superficieBien || 0;

    this.typeBien = copy.typeBien || EnumTypeBien.NONE;

    this.etatBien = copy.etatBien || EnumEtatBien.NONE;

    this.titreBien = copy.titreBien || null;

    this.dependances = copy.dependances || null;

    this.images = copy.images || null;

    this.agent = copy.agent || null;

    this.agence = copy.agence || null;

    this.client = copy.client || null;
  }
}
