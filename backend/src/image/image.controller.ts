import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { ImagePostInDto } from './image.dto';
import { Image } from './image.entity';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get() // Affiche tout
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':photoId') // a qui ca correspond et on l'affiche
  findOneById(@Param('photoId') photoId: string) {
    return this.imageService.findById(photoId);
  }

  @Post() // va créer l'objet
  create(@Body() dto: ImagePostInDto) {
    return this.imageService.create(dto);
  }

  @Put(':imageId/update')
  async update(@Param('imageId') imageId, @Body() dto: Image): Promise<any> {
    dto.imageId = String(imageId);
    // console.log('Update #' + dto.adresseId);
    return this.imageService.update(dto);
  }

  @Delete(':imageId/delete')
  async delete(@Param('imageId') imageId): Promise<any> {
    return this.imageService.delete(imageId);
  }
}
