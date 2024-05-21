import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const user = await this.usersService.findByMail(signInDto.correo);

    if (user.Password !== signInDto.password) {
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

  async signUp(signUpDto: SignUpDto) {
    const createdUser = await this.usersService.create(signUpDto.user);

    const createdAccount = await this.accountsService.create(signUpDto.account);

    const { Password, ...userInfo } = createdUser.toObject();
    const { UserId, ...accountInfo } = createdAccount.toObject();

    const payload = {
      sub: createdUser.id,
      user: userInfo,
      account: accountInfo,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
