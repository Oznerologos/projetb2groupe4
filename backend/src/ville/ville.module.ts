import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ville } from './ville.entity';
import { VilleService } from './ville.service';
import { VilleController } from './ville.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Ville])],
  controllers: [VilleController],
  providers: [VilleService],
  // exports: [VilleService],
})
export class VilleModule {}
