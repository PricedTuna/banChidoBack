import { Test, TestingModule } from '@nestjs/testing';
import { RfidtokenService } from './rfidtoken.service';

describe('RfidtokenService', () => {
  let service: RfidtokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RfidtokenService],
    }).compile();

    service = module.get<RfidtokenService>(RfidtokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
