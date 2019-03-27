import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agence } from './agence.entity';
import { AgenceService } from './agence.service';
import { AgenceController } from './agence.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Agence])],
  controllers: [AgenceController],
  providers: [AgenceService],
  // exports: [AgenceService],
})
export class AgenceModule {}
