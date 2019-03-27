import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departement } from './departement.entity';
import { DepartementService } from './departement.service';
import { DepartementController } from './departement.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Departement])],
  controllers: [DepartementController],
  providers: [DepartementService],
  // exports: [DepartementService],
})
export class DepartementModule {}
