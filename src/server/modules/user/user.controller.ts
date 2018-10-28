import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'shared/dto/user/UserCreateDto';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Get()
  @UseGuards(AuthGuard())
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
