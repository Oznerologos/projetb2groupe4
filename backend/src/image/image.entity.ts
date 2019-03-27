// Pour le projet

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 

@Entity({name: 'image' })
export class Image{

    @PrimaryGeneratedColumn('uuid', {name: 'id_image' }) 
    id_image: string;

    @Column({name: 'LienImage', type: 'varchar', length: 500, nullable: false})
    lien_image: string;

    @Column({name: 'alt_image', type: 'varchar', nullable: false})
    alt_image: string;

    constructor(copy: Partial<Image> = {}) { // on met les choix par defaut
        
        this.id_image = copy.id_image || undefined;

        this.lien_image = copy.lien_image || null;

        this.alt_image = copy.alt_image || null;
    }
}

const photo = new Image(); 
const photo2 = new Image({lien_image: 'test', alt_image: 'Mon bien'}); 