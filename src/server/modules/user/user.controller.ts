import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from '../../../shared/dto/user/UserCreateDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Body() user: UserCreateDto) {
    await this.userService.create(user);
  }
}