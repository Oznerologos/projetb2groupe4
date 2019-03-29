import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { ImagePostInDto } from './image.dto';
import { Image } from './image.entity';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get(':imageId')
  findOneById(@Param('imageId') imageId: string) {
    return this.imageService.findById(imageId);
  }

  @Post()
  create(@Body() dto: ImagePostInDto) {
    return this.imageService.create(dto);
  }

  @Put(':imageId/update')
  async update(
    @Param('imageId') imageId: string,
    @Body() dto: ImagePostInDto,
  ): Promise<Image> {
    return this.imageService.update(imageId, dto);
  }

  @Delete(':imageId/delete')
  async delete(@Param('imageId') imageId): Promise<any> {
    return this.imageService.delete(imageId);
  }
}
