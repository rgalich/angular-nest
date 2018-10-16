import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'shared/dto/user/UserCreateDto';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard())
  async create(@Body() user: UserCreateDto) {
    return this.userService.create(user);
  }

  @Post('login')
  async login(@Body() user: UserLoginDto) {
    return this.userService.login(user);
  }
}
