import { IsDateString, IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator";

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
  @Length(4)
  Password: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'La fecha debe estar en formato YYYY-MM-DD' })
  FechaNacimiento: Date
}
