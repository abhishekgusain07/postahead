import { Test, TestingModule } from '@nestjs/testing';
import { BlinksService } from './blinks.service';
import { CreateBlinkDto } from '@repo/api/links/dto/create-blink.dto';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('BlinksService', () => {
  let service: BlinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlinksService],
    }).compile();

    service = module.get<BlinksService>(BlinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of blinks', () => {
      const result = service.findAll();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(4); // Based on the hardcoded blinks in service
      expect(result[0]).toHaveProperty('name', 'Docs');
    });
  });

  describe('create', () => {
    it('should return a string message with the created blink', () => {
      const createBlinkDto: CreateBlinkDto = { name: 'Test Blink' };
      const result = service.create(createBlinkDto);
      expect(typeof result).toBe('string');
      expect(result).toContain('This action adds a new link');
    });
  });
}); 