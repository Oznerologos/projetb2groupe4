import { Test, TestingModule } from '@nestjs/testing';
import { MdpController } from './mdp.controller';

describe('Mdp Controller', () => {
  let controller: MdpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MdpController],
    }).compile();

    controller = module.get<MdpController>(MdpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
