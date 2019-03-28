import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EnumTypeDependance } from 'src/enum/type-dependance.enum';
import { Bien } from 'src/bien/bien.entity';
import { Image } from 'src/image/image.entity';

@Entity({ name: 'dependance' })
export class Dependance {
  @PrimaryGeneratedColumn('uuid', { name: 'id_dependance' })
  idDependance: string;

  @Column({
    name: 'type_dep',
    type: 'enum',
    enum: EnumTypeDependance,
    nullable: false,
  })
  typeDep: EnumTypeDependance;

  @Column({ name: 'superficie_dep', type: 'double precision', nullable: false })
  superficieDep: number;

  @Column({ name: 'descriptif', type: 'text', nullable: false })
  descriptif: string;

  @ManyToOne(type => Bien, bien => bien.dependances)
  bien: Bien;

  @OneToMany(type => Image, image => image.dependance)
  images: Image[];

  constructor(copy: Partial<Dependance> = {}) {
    this.idDependance = copy.idDependance || undefined;
    this.typeDep = copy.typeDep || EnumTypeDependance.NONE;
    this.superficieDep = copy.superficieDep || null;
    this.descriptif = copy.descriptif || null;
    this.bien = copy.bien || null;
    this.images = copy.images || null;
  }
}
