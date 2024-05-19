import { IsDecimal, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  NumeroCuenta: string;

  @IsOptional()
  @IsNotEmpty()
  RFID?: string;
  
  @IsDecimal()
  @IsNotEmpty()
  Saldo: number;
  
  @IsString()
  @IsNotEmpty()
  UserId: string;
}
