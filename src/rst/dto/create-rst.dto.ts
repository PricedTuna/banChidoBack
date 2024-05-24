import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateRstDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  Cantidad: number;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  AccountId: string;
}
