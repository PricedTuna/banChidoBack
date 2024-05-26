import { Test, TestingModule } from '@nestjs/testing';
import { RfidtokenController } from './rfidtoken.controller';
import { RfidtokenService } from './rfidtoken.service';

describe('RfidtokenController', () => {
  let controller: RfidtokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RfidtokenController],
      providers: [RfidtokenService],
    }).compile();

    controller = module.get<RfidtokenController>(RfidtokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
