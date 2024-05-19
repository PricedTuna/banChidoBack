import { Test, TestingModule } from '@nestjs/testing';
import { RstController } from './rst.controller';
import { RstService } from './rst.service';

describe('RstController', () => {
  let controller: RstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RstController],
      providers: [RstService],
    }).compile();

    controller = module.get<RstController>(RstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
