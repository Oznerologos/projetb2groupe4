import { Module } from '@nestjs/common';
import { DependanceService } from './dependance.service';
import { DependanceController } from './dependance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dependance } from './dependance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dependance])],
  providers: [DependanceService],
  controllers: [DependanceController],
})
export class DependanceModule {}
