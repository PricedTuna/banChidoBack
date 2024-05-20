import { Test, TestingModule } from '@nestjs/testing';
import { RetiroService } from './retiro.service';

describe('RetiroService', () => {
  let service: RetiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetiroService],
    }).compile();

    service = module.get<RetiroService>(RetiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
