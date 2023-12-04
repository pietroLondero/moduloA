import { Test, TestingModule } from '@nestjs/testing';
import { ModuloAService } from './modulo-a.service';

describe('ModuloAService', () => {
  let service: ModuloAService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuloAService],
    }).compile();

    service = module.get<ModuloAService>(ModuloAService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
