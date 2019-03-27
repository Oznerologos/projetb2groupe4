import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EnumTypeDependance } from 'src/enum/type-dependance.enum';

@Entity({ name: 'dependance' })
export class Dependance {
  @PrimaryGeneratedColumn('uuid', { name: 'id_dependance' })
  idDependance: string;

  @Column({ name: 'type_dep', type: 'enum', nullable: false })
  typeDep: EnumTypeDependance;

  @Column({ name: 'superficie_dep', type: 'double precision', nullable: false })
  superficieDep: number;

  @Column({ name: 'descriptif', type: 'text', nullable: false })
  descriptif: string;

  constructor(copy: Partial<Dependance> = {}) {
    this.idDependance = copy.idDependance || undefined;
    this.typeDep = copy.typeDep || EnumTypeDependance.NONE;
    this.superficieDep = copy.superficieDep || null;
    this.descriptif = copy.descriptif || null;
  }
}
