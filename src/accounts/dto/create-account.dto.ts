import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty()
  numeroCuenta: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({required: false})
  RFID?: string;
  
  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty()
  saldo: number;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;
}
