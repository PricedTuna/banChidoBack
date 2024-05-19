import { Test, TestingModule } from '@nestjs/testing';
import { RstService } from './rst.service';

describe('RstService', () => {
  let service: RstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RstService],
    }).compile();

    service = module.get<RstService>(RstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
