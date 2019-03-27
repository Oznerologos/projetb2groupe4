import { Test, TestingModule } from '@nestjs/testing';
import { AgenceController } from './agence.controller';

describe('Agence Controller', () => {
  let controller: AgenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgenceController],
    }).compile();

    controller = module.get<AgenceController>(AgenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
