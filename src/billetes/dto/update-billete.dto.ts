import { PartialType } from '@nestjs/mapped-types';
import { CreateBilleteDto } from './create-billete.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBilleteDto extends PartialType(CreateBilleteDto) {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  valorBillete: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  cantidad: number;
}
