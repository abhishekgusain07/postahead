import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { describe, it, expect, beforeEach, jest } from '@jest/globals';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all users', () => {
      const result = 'This action returns all users';
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(controller.findAll()).toBe(result);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return one user', () => {
      const id = '1';
      const result = 'This action returns a #1 user';
      jest.spyOn(service, 'findOne').mockImplementation(() => result);

      expect(controller.findOne(id)).toBe(result);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });
}); 