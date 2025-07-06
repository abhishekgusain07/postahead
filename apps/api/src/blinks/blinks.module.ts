import { Module } from '@nestjs/common';

import { BlinksService } from './blinks.service';
import { BlinksController } from './blinks.controller';

@Module({
  controllers: [BlinksController],
  providers: [BlinksService],
})
export class BlinksModule {}