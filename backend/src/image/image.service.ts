import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  findAll() {
    return this.imageRepository.find();
  }

  findAllByBien(id: string) {
    return this.imageRepository.find({ imageBien: id });
  }

  findAllByDependance(id: string) {
    return this.imageRepository.find({ imageDependance: id });
  }

  findById(id: string) {
    return this.imageRepository.findOne({ imageId: id });
  }

  async create(data: Partial<Image>) {
    const image = new Image(data);
    const imageInserted = await this.imageRepository.save(image);
    return this.imageRepository.findOne({
      imageId: imageInserted.imageId,
    });
  }

  async update(imageId: string, image: Partial<Image>): Promise<Image> {
    await this.imageRepository.update(imageId, image);

    return this.imageRepository.findOne(imageId);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.imageRepository.delete(id);
  }
}
