import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateRstDto {
  @IsString()
  @IsNotEmpty()
  @Length(8)
  @ApiProperty()
  Token: string;
  
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  Cantidad: number;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  AccountId: string;
}
