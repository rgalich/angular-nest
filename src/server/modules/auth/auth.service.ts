import { BcryptService } from './../../core/service/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';
import { AuthTokenDto } from 'shared/dto/auth/AuthTokenDto';
import { ConfigService } from '../config/config.service';
import * as moment from 'moment';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private bcryptService: BcryptService,
    private configService: ConfigService
  ) {}

  async createToken(userLogin: UserLoginDto): Promise<AuthTokenDto> {
    const user = await this.userService.findByMail(userLogin.mail);
    if (user && this.bcryptService.compareHash(userLogin.password, user.password)) {
      const jwtPayload: JwtPayload = { mail: user.mail };

      const accessToken = this.jwtService.sign(jwtPayload);
      return {
        expiresIn: moment().add(+this.configService.get('EXPIRE_IN'), 's').toISOString(),
        accessToken
      };
    }
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findByMail(payload.mail);
  }
}
