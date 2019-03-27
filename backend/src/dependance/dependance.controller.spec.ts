import { Test, TestingModule } from '@nestjs/testing';
import { DependanceController } from './dependance.controller';

describe('Dependance Controller', () => {
  let controller: DependanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DependanceController],
    }).compile();

    controller = module.get<DependanceController>(DependanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
