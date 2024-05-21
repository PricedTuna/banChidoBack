import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
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

  async signUp({account: accountDto, user: userDto}: SignUpDto) {

    // verify if Correo has an user already
    if (this.verifyCorreoHasUser(userDto.Correo))
      throw new BadRequestException('mail has already an user')

    const createdUser = await this.usersService.create(userDto);

    const createdAccount = await this.accountsService.create({...accountDto, UserId: createdUser.id});

    const { Password, ...userInfo } = createdUser.toObject();
    const { UserId, ...accountInfo } = createdAccount.toObject();

    const payload = {
      sub: userInfo._id,
      user: userInfo,
      account: accountInfo,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }


  verifyCorreoHasUser(Correo: string) {
    const findedUser = this.usersService.findByMail(Correo);

    // return true si tiene usuario
    return findedUser !== null;
  }
}
