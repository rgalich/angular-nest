import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';
import { AuthTokenDto } from 'shared/dto/auth/AuthTokenDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() user: UserLoginDto): Promise<AuthTokenDto> {
    const token = await this.authService.createToken(user);
    if (token) {
      return token;
    }
    throw new HttpException('wrong email address or password', HttpStatus.UNAUTHORIZED);
  }
}
