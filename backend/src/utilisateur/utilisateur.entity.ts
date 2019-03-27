// Pour le projet

export enum Sexe {
    Femme,
    Homme, 
    Autre
  }

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 

@Entity({name: 'utilisateur' }) // On lui dit que tout ce qu'il y a dedans se trouve dans une entité.
export class Utilisateur{

    @PrimaryGeneratedColumn('uuid', {name: 'id_utilisateur' }) //On créer les colonnes de l'entité, et la primary
    id_utilisateur: string;

    @Column({name: 'mail', type: 'varchar', length: 50, nullable: false})
    mail_utilisateur: string;

    @Column({name: 'nom', type: 'varchar', nullable: false})
    nom_utilisateur: string;

    @Column({name: 'prenom', type: 'varchar', nullable: false})
    prenom_utilisateur: string;

    @Column({name: 'numero', type: 'varchar', nullable: false})
    tel_utilisateur: string;

    @Column({name: 'sexe', type: 'enum', nullable: false})
    sexe: Sexe; // enum


    constructor(copy: Partial<Utilisateur> = {}) { // on met les choix par defaut
        
        this.id_utilisateur = copy.id_utilisateur || undefined;

        this.mail_utilisateur = copy.mail_utilisateur || null;

        this.nom_utilisateur = copy.nom_utilisateur || null;

        this.prenom_utilisateur = copy.prenom_utilisateur || null;

        this.tel_utilisateur = copy.tel_utilisateur || null;

        this.sexe = copy.sexe || undefined;
    }
}

const user = new Utilisateur(); // Prend les valeurs par défaut.
const user2 = new Utilisateur({nom_utilisateur: 'logos', prenom_utilisateur: 'lorenzo'}); // Prend des valeurs par défault et celle indiqué ici