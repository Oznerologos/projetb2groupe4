import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposition } from './proposition.entity';
import { PropositionService } from './proposition.service';
import { PropositionController } from './proposition.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Proposition])],
  controllers: [PropositionController],
  providers: [PropositionService],
  // exports: [PropositionService],
})
export class PropositionModule {}
