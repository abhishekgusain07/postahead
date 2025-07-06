import { Test, TestingModule } from '@nestjs/testing';
import { BlinksController } from './blinks.controller';
import { BlinksService } from './blinks.service';
import { CreateBlinkDto } from '@repo/api/links/dto/create-blink.dto';

import { describe, it, expect, beforeEach, jest } from '@jest/globals';

describe('BlinksController', () => {
  let controller: BlinksController;
  let service: BlinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlinksController],
      providers: [BlinksService],
    }).compile();

    controller = module.get<BlinksController>(BlinksController);
    service = module.get<BlinksService>(BlinksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of blinks', () => {
      const result = [{ name: 'Test Blink' }];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(controller.findAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should create a new blink', () => {
      const createBlinkDto: CreateBlinkDto = { name: 'Test Blink' };
      const result = 'This action adds a new link Test Blink';
      jest.spyOn(service, 'create').mockImplementation(() => result);

      expect(controller.create(createBlinkDto)).toBe(result);
      expect(service.create).toHaveBeenCalledWith(createBlinkDto);
    });
  });
}); 