import { Module } from '@nestjs/common';

import { LinksModule } from './links/links.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BlinksModule } from './blinks/blinks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [LinksModule, BlinksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
