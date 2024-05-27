import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { RfidtokenService } from './rfidtoken.service';
import { CreateRfidtokenDto } from './dto/create-rfidtoken.dto';
import { ApiTags } from '@nestjs/swagger';
import { ConsumeTokenRfidDto } from './dto/consume-token.dto';
import { ValidateTokenDto } from './dto/validate-token';

@ApiTags('rfidtoken')
// @UseGuards(AuthGuard)
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

  @Post('consume-token')
  consumeToken(@Body(new ValidationPipe()) consumeTokenDto: ConsumeTokenRfidDto) {
    return this.rfidtokenService.consumeToken(consumeTokenDto);
  }

  @Post('validate-token')
  validateToken(@Body(new ValidationPipe()) validateTokenDto: ValidateTokenDto) {
    return this.rfidtokenService.validateToken(validateTokenDto);
  }
}
