import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async signIn(SignInDto: SignInDto) {
    const user = await this.usersService.findByMail(SignInDto.correo);

    if (user.Password !== SignInDto.password) {
      throw new UnauthorizedException();
    }

    const account = await this.accountsService.findByUserId(user.id);

    const { Password, ...userInfo } = user.toObject();
    const { UserId, ...accountInfo } = account.toObject();

    const payload = { sub: user.id, user: userInfo, account: accountInfo };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
