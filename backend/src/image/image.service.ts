import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {

    constructor(

        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>,
    
     ) {} // le corps de la fonction de constructor ( c'est entre eu qu'on met les super)

    findAll(){
        return this.imageRepository.find();
    }

    findById(id: string) {
        return this.imageRepository.findOne({ id_image: id });
    }

    async create(data: Partial<Image>){ // On Save les photos qui sont insérés.
        const image = new Image(data);
        const imageInserted = await this.imageRepository.save(image);
        return this.imageRepository.findOne({id_image: imageInserted.id_image});
    }
}
