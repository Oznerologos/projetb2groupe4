import { Injectable } from '@nestjs/common';
import { Bien } from './bien.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BienService {
    constructor(

        @InjectRepository(Bien)
        private readonly bienRepository: Repository<Bien>,
    
     ) {} // le corps de la fonction de constructor ( c'est entre eu qu'on met les super)

    findAll(){
        return this.bienRepository.find();
    }

    findById(id: string) {
        return this.bienRepository.findOne({ idBien: id });
    }

    async create(data: Partial<Bien>){ // On Save les photos qui sont insérés.
        const bien = new Bien(data);
        const bienInserted = await this.bienRepository.save(bien);
        return this.bienRepository.findOne({idBien: bienInserted.idBien});
    }
}
