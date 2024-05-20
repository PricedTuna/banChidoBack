import { Test, TestingModule } from '@nestjs/testing';
import { RetiroController } from './retiro.controller';
import { RetiroService } from './retiro.service';

describe('RetiroController', () => {
  let controller: RetiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetiroController],
      providers: [RetiroService],
    }).compile();

    controller = module.get<RetiroController>(RetiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
