import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Ville } from 'src/ville/ville.entity';
import { Utilisateur } from 'src/utilisateur/Utilisateur.entity';
import { Agence } from 'src/agence/agence.entity';

@Entity({ name: 'adresse' })
export class Adresse {
  @PrimaryGeneratedColumn('uuid', { name: 'id_adresse' })
  idAdresse: string;

  @Column({ name: 'code_postal', type: 'varchar', length: 20, nullable: false })
  codePostal: string;

  @Column({ name: 'nom_rue', type: 'varchar', length: 100, nullable: false })
  nomRue: string;

  @Column({ name: 'num_rue', type: 'varchar', length: 10 })
  numRue: string;

  @ManyToOne(type => Ville, ville => ville.adresses)
  ville: Ville;

  @OneToMany(type => Utilisateur, utilisateur => utilisateur.adresse)
  utilisateurs: Utilisateur[];

  @OneToMany(type => Agence, agence => agence.adresse)
  agences: Agence[];

  constructor(copy: Partial<Adresse> = {}) {
    this.idAdresse = copy.idAdresse || undefined;

    this.codePostal = copy.codePostal || null;
    this.nomRue = copy.nomRue || null;
    this.numRue = copy.numRue || null;

    this.ville = copy.ville || null;
    this.utilisateurs = copy.utilisateurs || null;
    this.agences = copy.agences || null;
  }
}
