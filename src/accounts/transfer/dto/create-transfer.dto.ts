import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransferDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  accountOrigenId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  accountDestinoiId: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  cantidad: number;
}
