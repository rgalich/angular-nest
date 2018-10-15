import { BcryptService } from './../../core/service/bcrypt.service';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
    private bcryptService: BcryptService
  ) {}

  async signIn(userLogin: UserLoginDto): Promise<string> {
    const user = await this.userService.findByMail(userLogin.mail);
    if (user && this.bcryptService.compareHash(userLogin.password, user.password)) {
      const jwtPayload: JwtPayload = { mail: user.mail };

      return this.jwtService.sign(jwtPayload);
    }

    return '';
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findByMail(payload.mail);
  }
}
