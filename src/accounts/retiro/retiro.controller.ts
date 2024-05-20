import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RetiroService } from './retiro.service';
import { CreateRetiroDto } from './dto/create-retiro.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('retiro')
@Controller('retiro')
export class RetiroController {
  constructor(private readonly retiroService: RetiroService) {}

  @Post()
  create(@Body() createRetiroDto: CreateRetiroDto) {
    return this.retiroService.create(createRetiroDto);
  }

  @Get()
  findAll() {
    return this.retiroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.retiroService.findOne(id);
  }

  @Get(':id')
  findByAccount(@Param('id') id: string) {
    return this.retiroService.findByAccount(id);
  }
}
