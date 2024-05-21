import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRetiroDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  accountId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  cantidad: number;
}
