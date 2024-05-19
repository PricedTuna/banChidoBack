import { Test, TestingModule } from '@nestjs/testing';
import { BilletesService } from './billetes.service';

describe('BilletesService', () => {
  let service: BilletesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BilletesService],
    }).compile();

    service = module.get<BilletesService>(BilletesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
