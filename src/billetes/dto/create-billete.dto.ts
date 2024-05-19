import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateBilleteDto {
  @IsNumber()
  @IsNotEmpty()
  ValorBillete: number;

  @IsNumber()
  @IsNotEmpty()
  Cantidad: number;
}
