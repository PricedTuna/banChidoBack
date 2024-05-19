import { PartialType } from '@nestjs/mapped-types';
import { CreateBilleteDto } from './create-billete.dto';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateBilleteDto extends PartialType(CreateBilleteDto) {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  ValorBillete: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  Cantidad: number;
}
