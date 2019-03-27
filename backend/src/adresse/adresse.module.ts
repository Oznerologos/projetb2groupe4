import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adresse } from './adresse.entity';
import { AdresseService } from './adresse.service';
import { AdresseController } from './adresse.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Adresse])],
  controllers: [AdresseController],
  providers: [AdresseService],
  // exports: [AdresseService],
})
export class AdresseModule {}
