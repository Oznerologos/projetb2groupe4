import { Module } from '@nestjs/common';
import { BienService } from './bien.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bien } from './bien.entity';
import { BienController } from './bien.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bien])],
  providers: [BienService],
  controllers: [BienController],
  exports: [BienService],
})
export class BienModule {}
