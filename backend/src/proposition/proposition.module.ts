import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proposition } from './proposition.entity';
import { PropositionService } from './proposition.service';
import { PropositionController } from './proposition.controller';
import { ClientModule } from 'src/client/client.module';
import { ClientService } from 'src/client/client.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proposition]), ClientModule],
  controllers: [PropositionController],
  providers: [PropositionService, ClientService],
  // exports: [PropositionService],
})
export class PropositionModule {}
