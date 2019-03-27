import { Test, TestingModule } from '@nestjs/testing';
import { BienController } from './bien.controller';

describe('Bien Controller', () => {
  let controller: BienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BienController],
    }).compile();

    controller = module.get<BienController>(BienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
