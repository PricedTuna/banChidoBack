import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { accountConstants } from "src/constants/constants";

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @Length(accountConstants.NumeroCuentaLength)
  @ApiProperty()
  NumeroCuenta: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({required: false})
  RFID?: string;
  
  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty()
  Saldo: number;
  
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  UserId: string;
}
