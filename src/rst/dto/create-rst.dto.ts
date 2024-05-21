import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateRstDto {
  @IsString()
  @IsNotEmpty()
  @Length(8)
  @ApiProperty()
  token: string;
  
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  cantidad: number;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  accountId: string;
}
