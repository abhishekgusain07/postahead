import { Injectable } from '@nestjs/common';

import { Blink } from '@repo/api/links/entities/blink.entity';

import { CreateLinkDto } from '@repo/api/links/dto/create-link.dto';
import { UpdateLinkDto } from '@repo/api/links/dto/update-link.dto';
import { CreateBlinkDto } from '@repo/api/links/dto/create-blink.dto';

@Injectable()
export class BlinksService {
  private readonly _blinks: Blink[] = [
    {
      name: 'Docs',
    },
    {
      name: 'Learn',
    },
    {
      name: 'Templates',
    },
    {
      name: 'Deploy',
    },
  ];

  create(createBlinkDto: CreateBlinkDto) {
    return `This action adds a new link ${createBlinkDto}`;
  }

  findAll() {
    return this._blinks;
  }
}
