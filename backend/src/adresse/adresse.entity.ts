import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Ville } from 'src/ville/ville.entity';
import { Utilisateur } from 'src/utilisateur/utilisateur.entity';
import { Agence } from 'src/agence/agence.entity';
// import { Bien } from 'src/bien/bien.entity';

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
  ville: Ville;
  @Column({ name: 'ville_id', type: 'uuid', nullable: false })
  adresseVille: string;

  @OneToMany(() => Utilisateur, utilisateur => utilisateur.adresse)
  utilisateurs: Utilisateur[];

  @OneToMany(() => Agence, agence => agence.adresse)
  agences: Agence[];

  // @OneToOne(() => Bien)
  // @JoinColumn()
  // adresseBien: Bien;

  constructor(copy: Partial<Adresse> = {}) {
    this.adresseId = copy.adresseId || undefined;

    this.adresseCodePostal = copy.adresseCodePostal || null;
    this.adresseNomRue = copy.adresseNomRue || null;
    this.adresseNumRue = copy.adresseNumRue || null;

    this.adresseVille = copy.adresseVille || null;
    this.utilisateurs = copy.utilisateurs || null;
    this.agences = copy.agences || null;
    // this.adresseBien = copy.adresseBien || null;
  }
}
