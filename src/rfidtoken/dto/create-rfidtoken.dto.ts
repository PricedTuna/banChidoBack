import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateRfidtokenDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  AccountId: string;
}
