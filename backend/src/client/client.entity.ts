import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Proposition } from '../proposition/proposition.entity';
import { Bien } from '../bien/bien.entity';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Image } from '../image/image.entity';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn('uuid', { name: 'client_id' })
  clientId: string;

  @Column('uuid', { name: 'client_num_parrainage' })
  clientNumParrainage: string;

  @OneToMany(() => Proposition, proposition => proposition.client)
  propositions: Proposition[];

  @OneToMany(() => Bien, bien => bien.client)
  biens: Bien[];

  @OneToOne(() => Utilisateur, utilisateur => utilisateur.client)
  @JoinColumn({ name: 'utilisateur_client' })
  utilisateur: Utilisateur;
  @Column({ name: 'utilisateur_id', type: 'uuid', nullable: false })
  clientUtilisateur: string;

  @OneToMany(() => Image, image => image.dependance)
  images: Image[];

  @ManyToMany(() => Bien, bien => bien.clients)
  biensFavoris: Bien[];

  constructor(copy: Partial<Client> = {}) {
    this.clientId = copy.clientId || undefined;

    this.clientNumParrainage = copy.clientNumParrainage || null;

    this.propositions = copy.propositions || null;

    this.biens = copy.biens || null;

    this.clientUtilisateur = copy.clientUtilisateur || null;

    this.biensFavoris = copy.biensFavoris || null;
  }
}
