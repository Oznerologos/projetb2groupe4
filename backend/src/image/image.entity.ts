// Pour le projet

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Dependance } from '../dependance/dependance.entity';
import { Bien } from '../bien/bien.entity';

@Entity({ name: 'image' })
export class Image {
  @PrimaryGeneratedColumn('uuid', { name: 'image_id' })
  imageId: string;

  @Column({ name: 'image_lien', type: 'varchar', length: 500, nullable: false })
  imageLien: string;

  @Column({ name: 'image_alt', type: 'varchar', nullable: false })
  imageAlt: string;

  @ManyToOne(() => Dependance, dependance => dependance.dependanceImages)
  @JoinColumn({ name: 'dependance_id' })
  dependance: Dependance;
  @Column({ name: 'dependance_id', type: 'uuid', nullable: true })
  imageDependance: string;

  @ManyToOne(() => Bien, bien => bien.bienImages)
  @JoinColumn({ name: 'bien_id' })
  bien: Bien;
  @Column({ name: 'bien_id', type: 'uuid', nullable: true })
  imageBien: string;

  constructor(copy: Partial<Image> = {}) {
    // on met les choix par defaut

    this.imageId = copy.imageId || undefined;

    this.imageLien = copy.imageLien || null;

    this.imageAlt = copy.imageAlt || null;

    this.imageDependance = copy.imageDependance || null;

    this.imageBien = copy.imageBien || null;
  }
}
