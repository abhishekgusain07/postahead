import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { describe, it, expect, beforeEach, jest } from '@jest/globals';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all users message', () => {
      const result = service.findAll();
      expect(result).toBe('This action returns all users');
    });
  });

  describe('findOne', () => {
    it('should return one user message', () => {
      const id = 1;
      const result = service.findOne(id);
      expect(result).toBe(`This action returns a #${id} user`);
    });
  });
}); 