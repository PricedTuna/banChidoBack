import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RfidtokenService } from './rfidtoken.service';
import { CreateRfidtokenDto } from './dto/create-rfidtoken.dto';

@Controller('rfidtoken')
export class RfidtokenController {
  constructor(private readonly rfidtokenService: RfidtokenService) {}

  @Post()
  create(@Body() createRfidtokenDto: CreateRfidtokenDto) {
    return this.rfidtokenService.create(createRfidtokenDto);
  }

  @Get()
  findAll() {
    return this.rfidtokenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rfidtokenService.findOne(id);
  }
}
