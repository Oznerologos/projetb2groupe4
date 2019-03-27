import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotDePasse } from './mdp.entity';
import { MotDePasseService } from './mdp.service';
import { MotDePasseController } from './mdp.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MotDePasse])],
  controllers: [MotDePasseController],
  providers: [MotDePasseService],
  // exports: [MotDePasseService],
})
export class MotDePasseModule {}
