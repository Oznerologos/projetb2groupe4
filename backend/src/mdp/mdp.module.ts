import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mdp } from './mdp.entity';
import { MdpService } from './mdp.service';
import { MdpController } from './mdp.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mdp])],
  controllers: [MdpController],
  providers: [MdpService],
  // exports: [MdpService],
})
export class MdpModule {}
