import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RstService } from './rst.service';
import { CreateRstDto } from './dto/create-rst.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rst')
@Controller('rst')
export class RstController {
  constructor(private readonly rstService: RstService) {}

  @Post()
  create(@Body() createRstDto: CreateRstDto) {
    return this.rstService.create(createRstDto);
  }

  @Get()
  findAll() {
    return this.rstService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rstService.findOne(id);
  }

  @Get(':token')
  findByToken(@Param('token') token: string) {
    return this.rstService.findByToken(token);
  }
}
