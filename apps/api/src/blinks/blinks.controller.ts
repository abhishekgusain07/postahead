import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    } from '@nestjs/common';
import { BlinksService } from './blinks.service';
  
  import { CreateBlinkDto } from '@repo/api/links/dto/create-blink.dto';
  
  @Controller('blinks')
  export class BlinksController {
    constructor(private readonly blinksService: BlinksService) {}
  
    @Post()
    create(@Body() createBlinkDto: CreateBlinkDto) {
      return this.blinksService.create(createBlinkDto);
    }
  
    @Get()
    findAll() {
      return this.blinksService.findAll();
    }
  }
  