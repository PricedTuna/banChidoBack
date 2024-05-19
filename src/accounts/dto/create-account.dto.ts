import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty()
  NumeroCuenta: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty()
  RFID?: string;
  
  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty()
  Saldo: number;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  UserId: string;
}
