import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { EnumTypeDependance } from 'src/enum/type-dependance.enum';
import { Bien } from 'src/bien/bien.entity';
import { Image } from 'src/image/image.entity';

@Entity({ name: 'dependance' })
export class Dependance {
  @PrimaryGeneratedColumn('uuid', { name: 'dependance_id' })
  dependanceId: string;

  @Column({
    name: 'dependance_type',
    type: 'enum',
    enum: EnumTypeDependance,
    nullable: false,
  })
  dependanceType: EnumTypeDependance;

  @Column({ name: 'dependance_superficie', type: 'float', nullable: false })
  dependanceSuperficie: number;

  @Column({ name: 'dependance_descriptif', type: 'text', nullable: false })
  dependanceDescriptif: string;

  @ManyToOne(() => Bien, bien => bien.bienDependances)
  @JoinColumn({ name: 'bien_id' })
  bien: Bien;
  @Column({ name: 'bien_id', type: 'uuid', nullable: false })
  dependanceBien: string;

  @OneToMany(() => Image, image => image.dependance)
  dependanceImages: Image[];

  constructor(copy: Partial<Dependance> = {}) {
    this.dependanceId = copy.dependanceId || undefined;
    this.dependanceType = copy.dependanceType || EnumTypeDependance.NONE;
    this.dependanceSuperficie = copy.dependanceSuperficie || null;
    this.dependanceDescriptif = copy.dependanceDescriptif || null;
    this.dependanceBien = copy.dependanceBien || null;
    this.dependanceImages = copy.dependanceImages || null;
  }
}
