import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor (private usersService: UsersService, private accountsService: AccountsService){}

  async signIn(SignInDto: SignInDto) {
    const user = await this.usersService.findByMail(SignInDto.correo);

    if(user.Password !== SignInDto.password){
      throw new UnauthorizedException();
    }

    const account = await this.accountsService.findByUserId(user.id);
    return {account, user};
  }

}
