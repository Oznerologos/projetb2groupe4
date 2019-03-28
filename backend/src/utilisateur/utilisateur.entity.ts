import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EnumSexe } from 'src/enum/sexe.enum';
import { Adresse } from 'src/adresse/adresse.entity';
import { Agent } from 'src/agent/agent.entity';
import { Mdp } from 'src/mdp/mdp.entity';
import { Client } from 'src/client/client.entity';

@Entity({ name: 'utilisateur' }) // On lui dit que tout ce qu'il y a dedans se trouve dans une entité.
export class Utilisateur {
  @PrimaryGeneratedColumn('uuid', { name: 'id_utilisateur' }) // On créer les colonnes de l'entité, et la primary
  idUtilisateur: string;

  @Column({ name: 'mail', type: 'varchar', length: 50, nullable: false })
  mailUtilisateur: string;

  @Column({ name: 'nom', type: 'varchar', nullable: false })
  nomUtilisateur: string;

  @Column({ name: 'prenom', type: 'varchar', nullable: false })
  prenomUtilisateur: string;

  @Column({ name: 'numero', type: 'varchar', nullable: false })
  telUtilisateur: string;

  @Column({ name: 'sexe', type: 'enum', enum: EnumSexe, nullable: false })
  sexe: EnumSexe;

  @ManyToOne(type => Adresse, adresse => adresse.utilisateurs)
  adresse: Adresse;

  @OneToMany(type => Agent, agent => agent.utilisateur)
  agents: Agent[];

  @OneToMany(type => Mdp, mdp => mdp.utilisateur)
  mdps: Mdp[];

  @OneToMany(type => Client, client => client.utilisateur)
  clients: Utilisateur[];

  constructor(copy: Partial<Utilisateur> = {}) {
    this.idUtilisateur = copy.idUtilisateur || undefined;

    this.mailUtilisateur = copy.mailUtilisateur || null;
    this.nomUtilisateur = copy.nomUtilisateur || null;
    this.prenomUtilisateur = copy.prenomUtilisateur || null;
    this.telUtilisateur = copy.telUtilisateur || null;
    this.sexe = copy.sexe || EnumSexe.NONE;

    this.adresse = copy.adresse || null;
    this.agents = copy.agents || null;
    this.mdps = copy.mdps || null;
    this.clients = copy.clients || null;
  }
}
