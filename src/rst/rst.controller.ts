import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe } from '@nestjs/common';
import { RstService } from './rst.service';
import { CreateRstDto } from './dto/create-rst.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { ConsumeTokenDto } from './dto/consume-token-dto';

@ApiTags('rst')
// @UseGuards(AuthGuard)
@Controller('rst')
export class RstController {
  constructor(private readonly rstService: RstService) {}

  @Post()
  create(@Body(new ValidationPipe()) createRstDto: CreateRstDto) {
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

  @Get('account:id')
  findByAccount(@Param('id') id: string) {
    return this.rstService.findByAccount(id);
  }

  @Post('consume-token')
  consumeToken(@Body(new ValidationPipe()) consumeTokenDto: ConsumeTokenDto) {
    return this.rstService.consumeToken(consumeTokenDto);
  }
}
