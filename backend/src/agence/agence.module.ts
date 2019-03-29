import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agence } from './agence.entity';
import { AgenceService } from './agence.service';
import { AgenceController } from './agence.controller';
import { Adresse } from 'src/adresse/adresse.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Agence]),
    TypeOrmModule.forFeature([Adresse]),
  ],
  controllers: [AgenceController],
  providers: [AgenceService],
  exports: [AgenceService],
})
export class AgenceModule {}
