import { Module } from '@nestjs/common';
import { BienService } from './bien.service';

@Module({
  providers: [BienService]
})
export class BienModule {}
