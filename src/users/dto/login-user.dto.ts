import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";

export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  correo: string;

  @IsNotEmpty()
  @IsString()
  @Length(4)
  @ApiProperty()
  password: string;
}