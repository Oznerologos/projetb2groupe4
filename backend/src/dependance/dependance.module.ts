import { Module } from '@nestjs/common';
import { DependanceService } from './dependance.service';
import { DependanceController } from './dependance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dependance } from './dependance.entity';
import { Image } from 'src/image/image.entity';
import { ImageService } from 'src/image/image.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dependance]),
    TypeOrmModule.forFeature([Image]),
  ],
  providers: [DependanceService, ImageService],
  controllers: [DependanceController],
})
export class DependanceModule {}
