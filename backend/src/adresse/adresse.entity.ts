import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Ville } from '../ville/ville.entity';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { Agence } from '../agence/agence.entity';
import { Bien } from 'src/bien/bien.entity';

@Entity({ name: 'adresse' })
export class Adresse {
  @PrimaryGeneratedColumn('uuid', { name: 'adresse_id' })
  adresseId: string;

  @Column({
    name: 'adresse_code_postal',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  adresseCodePostal: string;

  @Column({
    name: 'adresse_nom_rue',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  adresseNomRue: string;

  @Column({ name: 'adresse_num_rue', type: 'varchar', length: 10 })
  adresseNumRue: string;

  @ManyToOne(() => Ville, ville => ville.adresses)
  @JoinColumn({ name: 'ville_id' })
  adresseVille: Ville;
  @Column({ name: 'ville_id', type: 'integer', nullable: false })
  adresseVilleId: number;

  @OneToOne(() => Utilisateur, utilisateur => utilisateur.adresse)
  utilisateur: Utilisateur;

  @OneToMany(() => Agence, agence => agence.adresse)
  agences: Agence[];

  @OneToOne(() => Bien)
  adresseBien: Bien;

  constructor(copy: Partial<Adresse> = {}) {
    this.adresseId = copy.adresseId || undefined;

    this.adresseCodePostal = copy.adresseCodePostal || null;
    this.adresseNomRue = copy.adresseNomRue || null;
    this.adresseNumRue = copy.adresseNumRue || null;

    this.adresseVilleId = copy.adresseVilleId || null;

    // this.utilisateur = copy.utilisateur || null;
    // this.agences = copy.agences || null;

    //this.adresseVille = copy.adresseVille || null;
  }
}
