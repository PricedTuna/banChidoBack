import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ConsumeTokenRfidDto {
  @IsString()
  @ApiProperty()
  Token: string;

  @IsString()
  @ApiProperty()
  RFID: string;
}