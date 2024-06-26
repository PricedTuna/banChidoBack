import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";
import { userConstants } from "src/constants/constants";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  Nombres: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  Apellido1: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  Apellido2: string;
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  Correo: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(userConstants.PasswordLength)
  @ApiProperty()
  Password: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'La fecha debe estar en formato YYYY-MM-DD' })
  @ApiProperty()
  FechaNacimiento: Date
}
