import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBilleteDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  valorBillete: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  cantidad: number;
}
