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

  async createToken(userLogin: UserLoginDto): Promise<any> {
    const user = await this.userService.findByMail(userLogin.mail);
    if (user && this.bcryptService.compareHash(userLogin.password, user.password)) {
      const jwtPayload: JwtPayload = { mail: user.mail };

      const accessToken = this.jwtService.sign(jwtPayload);
      return {
        expiresIn: 3600,
        accessToken,
      };
    }

    return '';
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findByMail(payload.mail);
  }
}
