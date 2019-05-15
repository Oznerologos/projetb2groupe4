import { Test, TestingModule } from '@nestjs/testing';
import { DependanceService } from './dependance.service';

describe('DependanceService', () => {
  let service: DependanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DependanceService],
    }).compile();

    service = module.get<DependanceService>(DependanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
