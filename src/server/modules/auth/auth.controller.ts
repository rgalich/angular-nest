import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';
import { AuthTokenDto } from 'shared/dto/auth/AuthTokenDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() user: UserLoginDto): Promise<AuthTokenDto> {
    return await this.authService.createToken(user);
  }
}
