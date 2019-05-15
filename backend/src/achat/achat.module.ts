import { Module } from '@nestjs/common';
import { AchatService } from './achat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achat } from './achat.entity';
import { AchatController } from './achat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Achat])],
  providers: [AchatService],
  controllers: [AchatController],
  exports: [AchatService],
})
export class AchatModule {}
