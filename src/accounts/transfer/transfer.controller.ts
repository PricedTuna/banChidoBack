import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('transfer')
@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  create(@Body() createTransferDto: CreateTransferDto) {
    return this.transferService.create(createTransferDto);
  }

  @Get()
  findAll() {
    return this.transferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferService.findOne(id);
  }

  @Get('acc-origin/:accountId')
  findByAccountOriginId(@Param('accountId') accountId: string) {
    return this.transferService.findByAccountOriginId(accountId);
  }

  @Get('acc-destination/:accountId')
  findByAccountDestinationId(@Param('accountId') accountId: string) {
    return this.transferService.findByAccountDestinationId(accountId);
  }
}
