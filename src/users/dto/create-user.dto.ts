import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";

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
  
  @IsNumberString()
  @IsNotEmpty()
  @IsString()
  @Length(4)
  @ApiProperty()
  Password: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'La fecha debe estar en formato YYYY-MM-DD' })
  @ApiProperty()
  FechaNacimiento: Date
}
