import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BilletesService } from './billetes.service';
import { CreateBilleteDto } from './dto/create-billete.dto';
import { UpdateBilleteDto } from './dto/update-billete.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('billetes')
@Controller('billetes')
export class BilletesController {
  constructor(private readonly billetesService: BilletesService) {}

  @Post()
  create(@Body() createBilleteDto: CreateBilleteDto) {
    return this.billetesService.create(createBilleteDto);
  }

  @Get()
  findAll() {
    return this.billetesService.findAll();
  }

  @Get(':valor')
  findOne(@Param('valor') valor: number) {
    return this.billetesService.findOne(valor);
  }

  @Patch(':valor')
  update(@Param('valor') valor: number, @Body() updateBilleteDto: UpdateBilleteDto) {
    return this.billetesService.update(valor, updateBilleteDto);
  }

  @Delete(':valor')
  remove(@Param('valor') valor: number) {
    return this.billetesService.remove(valor);
  }
}
