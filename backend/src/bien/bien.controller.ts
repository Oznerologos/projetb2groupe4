import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
  Header,
} from '@nestjs/common';
import { BienService } from './bien.service';
import { BienPostInDto } from './bien.dto';
import { Bien } from './bien.entity';
import { Image } from 'src/image/image.entity';
import { ImageService } from 'src/image/image.service';
import { DependanceService } from 'src/dependance/dependance.service';
import { SearchBienDto } from './search.dto';

@Controller('bien')
export class BienController {
  constructor(
    private readonly bienService: BienService,
    private readonly imageService: ImageService,
    private readonly dependanceService: DependanceService,
  ) {}

  @Get()
  findAll() {
    return this.bienService.findAll();
  }

  @Get(':bienId')
  findOneById(@Param('bienId') bienId: string) {
    return this.bienService.findById(bienId);
  }

  @Get('/search/:bienParametres')
  async findByName(
    @Param('bienParametres') bienParametres: Partial<SearchBienDto>,
  ) {
    const bien: Bien[] = await this.bienService.findByParameter(bienParametres);
    for (let i = 0; i < bien.length; i++) {
      bien[i].bienImages = await this.imageService.findAllByBien(
        bien[i].bienId,
      );
      bien[i].bienDependances = await this.dependanceService.findAllByBien(
        bien[i].bienId,
      );
    }
    return bien;
  }

  @Post()
  async create(@Body() dto: BienPostInDto) {
    return this.bienService.create(dto);
  }

  @Put(':bienId/update')
  async update(
    @Param('bienId') bienId: string,
    @Body() dto: BienPostInDto,
  ): Promise<Bien> {
    return this.bienService.update(bienId, dto);
  }

  @Delete(':bienId/delete')
  async delete(@Param('bienId') bienId): Promise<any> {
    return this.bienService.delete(bienId);
  }
}
