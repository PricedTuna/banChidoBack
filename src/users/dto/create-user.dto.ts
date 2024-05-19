import { IsDateString, IsEmail, IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  Nombres: string;
  
  @IsNotEmpty()
  @IsString()
  Apellido1: string;
  
  @IsNotEmpty()
  @IsString()
  Apellido2: string;
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  Correo: string;
  
  @IsNumberString()
  @IsNotEmpty()
  @IsString()
  Password: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'La fecha debe estar en formato YYYY-MM-DD' })
  FechaNacimiento: Date
}
