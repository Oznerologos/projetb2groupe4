// Pour le projet
export enum TypeDeBien {
  Maison,
  Appartement,
}

export enum EtatDeBien {
  Vendu,
  NonVendu,
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ name: 'type_bien', type: 'enum', nullable: false })
  typeBien: TypeDeBien; // enum

  @Column({ name: 'etat_bien', type: 'enum', nullable: false })
  etatBien: EtatDeBien; // enum

  @Column({ name: 'titre_bien', type: 'varchar', nullable: false })
  titreBien: string;

  constructor(copy: Partial<Bien> = {}) {
    // on met les choix par defaut

    this.idBien = copy.idBien || undefined;

    this.etage = copy.etage || 0;

    this.descriptif = copy.descriptif || null;

    this.prixMin = copy.prixMin || 0;

    this.prixDeVente = copy.prixDeVente || 0;

    this.nbPiece = copy.nbPiece || 0;

    this.superficieBien = copy.superficieBien || 0;

    this.typeBien = copy.typeBien || undefined;

    this.etatBien = copy.etatBien || undefined;

    this.titreBien = copy.titreBien || null;
  }
}

const user = new Bien(); // Prend les valeurs par défaut.
const user2 = new Bien({ etage: 1, prixMin: 100000 }); // Prend des valeurs par défault et celle indiqué ici
