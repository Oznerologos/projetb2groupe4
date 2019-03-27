// Pour le projet
export enum TypeDeBien {
    Maison,
    Appartement
  }

export enum EtatDeBien {
    Vendu,
    NonVendu
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 

@Entity({name: 'bien' }) // On lui dit que tout ce qu'il y a dedans se trouve dans une entité.
export class Bien{

    @PrimaryGeneratedColumn('uuid', {name: 'id_bien' }) //On créer les colonnes de l'entité, et la primary
    id: string;

    @Column({name: 'etage', type: 'int', nullable: false})
    etage: number;

    @Column({name: 'descriptif', type: 'text', nullable: false})
    descriptif: string;

    @Column({name: 'prixMin', type: 'float', nullable: false})
    prix_min: number;

    @Column({name: 'prixDeVente', type: 'float', nullable: false})
    prix_de_vente: number;

    @Column({name: 'nbPiece', type: 'int', nullable: false})
    nb_Piece: number;

    @Column({name: 'superficieBien', type: 'float', nullable: false})
    superficie_bien: number;

    @Column({name: 'typeBien', type: 'enum', nullable: false})
    Type_bien: TypeDeBien; // enum

    @Column({name: 'etatBien', type: 'enum', nullable: false})
    etat_bien: EtatDeBien; // enum

    @Column({name: 'titreBien', type: 'varchar', nullable: false})
    titre_bien: string; 

    constructor(copy: Partial<Bien> = {}) { // on met les choix par defaut
        
        this.id = copy.id || undefined;

        this.etage = copy.etage || 0;

        this.descriptif = copy.descriptif || null;

        this.prix_min = copy.prix_min || 0;

        this.prix_de_vente = copy.prix_de_vente || 0;

        this.nb_Piece = copy.nb_Piece || 0;

        this.superficie_bien = copy.superficie_bien || 0;

        this.Type_bien = copy.Type_bien || undefined;

        this.etat_bien = copy.etat_bien || undefined;

        this.titre_bien = copy.titre_bien ||null;

    }
}

const user = new Bien(); // Prend les valeurs par défaut.
const user2 = new Bien({etage: 1, prix_min: 100000}); // Prend des valeurs par défault et celle indiqué ici