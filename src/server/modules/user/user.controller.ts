import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'shared/dto/user/UserCreateDto';
import { UserLoginDto } from 'shared/dto/user/UserLoginDto';
import { PaginationDto } from 'shared/dto/pagination.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiImplicitQuery } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Get('')
  @UseGuards(AuthGuard())
  async findAll(@Query() pagination: PaginationDto) {
    return await this.userService.findAll(+pagination.page, +pagination.pageSize);
  }

  @Post()
  async create(@Body() user: UserCreateDto) {
    return this.userService.create(user);
  }

  @Post('login')
  async login(@Body() user: UserLoginDto) {
    return this.userService.login(user);
  }


}
