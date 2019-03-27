import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

export enum type_dependance {
    Garage = 'Garage',
    Cellier = 'Cellier',
    Cave= 'Cave',
    Jardin= 'Jardin',
    Terrasse= '',
    Balcon= '',
    Piscine= '',
    Loggia= '',
}

@Entity({name: 'dependance'})
export class Dependance {
    @PrimaryGeneratedColumn('uuid', {name: 'id_dependance'})
    idDependance: string;

    @Column({name: 'type_dep', type: 'enum', nullable: false })
    typeDep: type_dependance;

    @Column({name : 'superficie_dep', type: 'double precision', nullable: false})
    superficieDep: number;

    @Column({ name: 'descriptif', type: 'text', nullable: false})
    descriptif: string;

    constructor(copy: Partial<Dependance> = {}) {
        this.idDependance = copy.idDependance || undefined;
        this.typeDep = copy.typeDep || ;
        this.superficieDep = copy.superficieDep || null;
        this.descriptif = copy.descriptif || null;
    }
}
