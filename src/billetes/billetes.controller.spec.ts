import { Test, TestingModule } from '@nestjs/testing';
import { BilletesController } from './billetes.controller';
import { BilletesService } from './billetes.service';

describe('BilletesController', () => {
  let controller: BilletesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BilletesController],
      providers: [BilletesService],
    }).compile();

    controller = module.get<BilletesController>(BilletesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
