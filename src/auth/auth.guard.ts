import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { jwtConstants } from './constants/constants';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private jwtService: JwtService){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    const request = context.switchToHttp().getRequest();
    const bearerToken: string = request.headers['authorization'];

    if(!bearerToken)
      throw new UnauthorizedException("No token");

    try {
      const token = bearerToken.split(' ')[1];
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret
      })

      request['user'] = payload;
    } catch(e) {
      throw new UnauthorizedException("Invalid token");
    }

    return true;
  }
}
