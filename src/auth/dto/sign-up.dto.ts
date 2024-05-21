import { ApiProperty } from "@nestjs/swagger";
import { CreateAccountDto } from "src/accounts/dto/create-account.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class SignUpDto {
  @ApiProperty()
  user: CreateUserDto;
  @ApiProperty()
  account: CreateAccountDto;
}