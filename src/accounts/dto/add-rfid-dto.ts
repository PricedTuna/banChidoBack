import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddRFIDDto{
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  AccountId: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty({required: true})
  RFID: string;
}