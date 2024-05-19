import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class CreateRstDto {
  @IsString()
  @IsNotEmpty()
  @Length(8)
  Token: string;
  
  @IsNumber()
  @IsNotEmpty()
  Cantidad: number;
  
  @IsString()
  @IsNotEmpty()
  AccountId: string;
}
