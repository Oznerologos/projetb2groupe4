import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { EnumSexe } from '../enum/sexe.enum';
import { Adresse } from '../adresse/adresse.entity';
import { Agent } from '../agent/agent.entity';
import { Client } from '../client/client.entity';

@Entity({ name: 'utilisateur' }) // On lui dit que tout ce qu'il y a dedans se trouve dans une entité.
export class Utilisateur {
  @PrimaryGeneratedColumn('uuid', { name: 'utilisateur_id' }) // On créer les colonnes de l'entité, et la primary
  utilisateurId: string;

  @Column({
    name: 'utilisateur_mail',
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  utilisateurMail: string;

  @Column({ name: 'utilisateur_nom', type: 'varchar', nullable: false })
  utilisateurNom: string;

  @Column({ name: 'utilisateur_prenom', type: 'varchar', nullable: false })
  utilisateurPrenom: string;

  @Column({ name: 'utilisateur_numero', type: 'varchar', nullable: false })
  utilisateurTel: string;

  @Column({
    name: 'utilisateur_sexe',
    type: 'enum',
    enum: EnumSexe,
    nullable: false,
  })
  utilisateurSexe: EnumSexe;

  @Column({
    name: 'utilisateur_mdp',
    type: 'varchar',
    nullable: false,
  })
  utilisateurMotDePasse: string;

  @ManyToOne(() => Adresse, adresse => adresse.utilisateur)
  @JoinColumn({ name: 'adresse_id' })
  adresse: Adresse;
  @Column({ name: 'adresse_id', type: 'uuid', nullable: true })
  utilisateurAdresse: string;

  @OneToOne(() => Agent, agent => agent.utilisateur)
  agent: Agent;

  @OneToOne(() => Client, client => client.utilisateur)
  client: Client;

  constructor(copy: Partial<Utilisateur> = {}) {
    this.utilisateurId = copy.utilisateurId || undefined;

    this.utilisateurMail = copy.utilisateurMail || null;
    this.utilisateurNom = copy.utilisateurNom || null;
    this.utilisateurPrenom = copy.utilisateurPrenom || null;
    this.utilisateurTel = copy.utilisateurTel || null;
    this.utilisateurSexe = copy.utilisateurSexe || EnumSexe.NONE;

    this.utilisateurAdresse = copy.utilisateurAdresse || null;
    this.utilisateurMotDePasse = copy.utilisateurMotDePasse || null;
  }
}
