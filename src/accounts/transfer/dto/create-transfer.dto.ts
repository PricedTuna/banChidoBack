import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransferDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  AccountOrigenId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  AccountDestinoiId: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  Cantidad: number;
}
