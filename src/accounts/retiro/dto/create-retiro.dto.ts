import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRetiroDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  AccountId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  Cantidad: number;
}
