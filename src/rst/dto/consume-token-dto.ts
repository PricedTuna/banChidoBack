import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ConsumeTokenDto {
  @IsString()
  @ApiProperty()
  Token: string;
}