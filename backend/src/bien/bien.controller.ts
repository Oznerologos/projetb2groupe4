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
import { ImageService } from 'src/image/image.service';
import { DependanceService } from 'src/dependance/dependance.service';
import { SearchBienDto } from './search.dto';
import { AdresseService } from 'src/adresse/adresse.service';
import { VilleService } from 'src/ville/ville.service';

@Controller('bien')
export class BienController {
  constructor(
    private readonly bienService: BienService,
    private readonly imageService: ImageService,
    private readonly dependanceService: DependanceService,
    private readonly adresseService: AdresseService,
    private readonly villeService: VilleService,
  ) {}

  @Get()
  findAll() {
    return this.bienService.findAll();
  }

  @Get(':bienId')
  findOneById(@Param('bienId') bienId: string) {
    return this.bienService.findById(bienId);
  }

  @Post('/search/')
  async findByParams(@Body() bienParametres: Partial<SearchBienDto>) {
    const bien: Bien[] = await this.bienService.findByParams(bienParametres);
    for (let i = 0; i < bien.length; i++) {
      bien[i].bienImages = await this.imageService.findAllByBien(
        bien[i].bienId,
      );
      bien[i].bienDependances = await this.dependanceService.findAllByBien(
        bien[i].bienId,
      );
      bien[i].bienAdresse = await this.adresseService.findById(
        bien[i].bienAdresseId,
      );
      bien[i].bienAdresse.adresseVille = await this.villeService.findById(
        bien[i].bienAdresse.adresseVilleId,
      );
      if (bienParametres.bienVille != null) {
        if (
          bien[i].bienAdresse.adresseVille.villeNom != bienParametres.bienVille
        ) {
          bien.splice(i);
        }
      }
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
