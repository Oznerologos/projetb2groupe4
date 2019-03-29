import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Image } from './image.entity';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {} // le corps de la fonction de constructor ( c'est entre eu qu'on met les super)

  findAll() {
    return this.imageRepository.find();
  }

  findById(id: string) {
    return this.imageRepository.findOne({ imageId: id });
  }

  async create(data: Partial<Image>) {
    // On Save les photos qui sont insérés.
    const image = new Image(data);
    const imageInserted = await this.imageRepository.save(image);
    return this.imageRepository.findOne({ imageId: imageInserted.imageId });
  }

  async update(image: Image): Promise<UpdateResult> {
    return await this.imageRepository.update(image.imageId, image);
  }

  async delete(imageId): Promise<DeleteResult> {
    return await this.imageRepository.delete(imageId);
  }
}
