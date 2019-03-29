import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { EnumSexe } from 'src/enum/sexe.enum';
import { Adresse } from 'src/adresse/adresse.entity';
import { Agent } from 'src/agent/agent.entity';
import { Mdp } from 'src/mdp/mdp.entity';
import { Client } from 'src/client/client.entity';

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
  sexe: EnumSexe;

  @ManyToOne(() => Adresse, adresse => adresse.utilisateurs)
  @JoinColumn({ name: 'adresse_id' })
  adresse: Adresse;

  @Column({ name: 'adresse_id', type: 'uuid', nullable: false })
  adresseId: string;

  @OneToMany(() => Agent, agent => agent.utilisateur)
  agents: Agent[];

  @OneToMany(() => Client, client => client.utilisateur)
  clients: Client[];

  @OneToOne(() => Mdp)
  @JoinColumn()
  mdp: Mdp;

  constructor(copy: Partial<Utilisateur> = {}) {
    this.utilisateurId = copy.utilisateurId || undefined;

    this.utilisateurMail = copy.utilisateurMail || null;
    this.utilisateurNom = copy.utilisateurNom || null;
    this.utilisateurPrenom = copy.utilisateurPrenom || null;
    this.utilisateurTel = copy.utilisateurTel || null;
    this.sexe = copy.sexe || EnumSexe.NONE;

    this.adresse = copy.adresse || null;
    this.agents = copy.agents || null;
    this.clients = copy.clients || null;
  }
}
