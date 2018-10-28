import { ApiBearerAuth } from '@nestjs/swagger';
import { RightGroupDto } from './../../../shared/dto/right/right-group.dto';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RightService } from './right.service';
import _ from 'lodash';
import { Right } from './right.entity';

@Controller('right')
export class RightController {
    constructor(private readonly rightService: RightService) {}

    @ApiBearerAuth()
    @Get('rightgroups')
    @UseGuards(AuthGuard())
    async findAllRightGroup(): Promise<RightGroupDto[]> {
        return await this.rightService.findAllRightGroup();
    }
}
