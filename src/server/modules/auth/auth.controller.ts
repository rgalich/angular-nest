import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() user: UserLoginDto): Promise<any> {
    return await this.authService.createToken(user);
  }
}
