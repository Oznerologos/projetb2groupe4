// Pour le projet

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'image' })
export class Image {
  @PrimaryGeneratedColumn('uuid', { name: 'id_image' })
  idImage: string;

  @Column({ name: 'lien_image', type: 'varchar', length: 500, nullable: false })
  lienImage: string;

  @Column({ name: 'alt_image', type: 'varchar', nullable: false })
  altImage: string;

  constructor(copy: Partial<Image> = {}) {
    // on met les choix par defaut

    this.idImage = copy.idImage || undefined;

    this.lienImage = copy.lienImage || null;

    this.altImage = copy.altImage || null;
  }
}
