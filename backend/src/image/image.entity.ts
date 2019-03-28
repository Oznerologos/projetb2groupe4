// Pour le projet

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Dependance } from 'src/dependance/dependance.entity';
import { Bien } from 'src/bien/bien.entity';

@Entity({ name: 'image' })
export class Image {
  @PrimaryGeneratedColumn('uuid', { name: 'id_image' })
  idImage: string;

  @Column({ name: 'lien_image', type: 'varchar', length: 500, nullable: false })
  lienImage: string;

  @Column({ name: 'alt_image', type: 'varchar', nullable: false })
  altImage: string;

  @ManyToOne(type => Dependance, dependance => dependance.images)
  dependance: Dependance;

  @ManyToOne(type => Bien, bien => bien.images)
  bien: Bien;

  constructor(copy: Partial<Image> = {}) {
    // on met les choix par defaut

    this.idImage = copy.idImage || undefined;

    this.lienImage = copy.lienImage || null;

    this.altImage = copy.altImage || null;

    this.dependance = copy.dependance || null;

    this.bien = copy.bien || null;
  }
}
