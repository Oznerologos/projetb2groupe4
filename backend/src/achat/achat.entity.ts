import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'achat' }) // On lui dit que tout ce qu'il y a dedans se trouve dans une entité.
export class Achat {
  @PrimaryGeneratedColumn('uuid', { name: 'id_achat' }) // On créer les colonnes de l'entité, et la primary
  idAchat: string;

  @Column({ name: 'date_achat', type: 'date', nullable: false })
  dateAchat: Date;

  constructor(copy: Partial<Achat> = {}) {
    // on met les choix par defaut

    this.idAchat = copy.idAchat || undefined;

    this.dateAchat = copy.dateAchat || new Date();
  }
}

const achat = new Achat(); // Prend les valeurs par défaut.
