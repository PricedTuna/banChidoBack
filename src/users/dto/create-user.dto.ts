import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nombres: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  apellido1: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  apellido2: string;
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  correo: string;
  
  @IsNumberString()
  @IsNotEmpty()
  @IsString()
  @Length(4)
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'La fecha debe estar en formato YYYY-MM-DD' })
  @ApiProperty()
  fechaNacimiento: Date
}
