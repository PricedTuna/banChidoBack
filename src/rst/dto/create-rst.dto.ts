import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRstDto {
  @IsString()
  @IsNotEmpty()
  Token: string;
  
  @IsNumber()
  @IsNotEmpty()
  Cantidad: number;
  
  @IsString()
  @IsNotEmpty()
  AccountId: string;
}
