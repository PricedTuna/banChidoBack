import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBilleteDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  ValorBillete: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  Cantidad: number;
}
