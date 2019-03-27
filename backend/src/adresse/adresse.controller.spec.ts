import { Test, TestingModule } from '@nestjs/testing';
import { AdresseController } from './adresse.controller';

describe('Adresse Controller', () => {
  let controller: AdresseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdresseController],
    }).compile();

    controller = module.get<AdresseController>(AdresseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
