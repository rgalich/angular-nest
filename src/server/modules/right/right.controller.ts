import { ApiBearerAuth } from '@nestjs/swagger';
import { RightGroupDto } from './../../../shared/dto/right/right-group.dto';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { RightService } from './right.service';
import _ from 'lodash';
import { RightGroupCreateDto } from 'shared/dto/right/right-group-create.dto';
import { RightGroupDetailDto } from 'shared/dto/right/right-group-detail.dto';

@Controller('right')
export class RightController {
    constructor(private readonly rightService: RightService) {}

    @ApiBearerAuth()
    @Get('rightgroups')
    @UseGuards(AuthGuard())
    async findAllRightGroup(): Promise<RightGroupDto[]> {
        return await this.rightService.findAllRightGroup();
    }

    @ApiBearerAuth()
    @Get('rights')
    @UseGuards(AuthGuard())
    async findAllRight(): Promise<RightGroupDto[]> {
        return await this.rightService.findAllRight();
    }

    @ApiBearerAuth()
    @Get('rightgroup/:id')
    @UseGuards(AuthGuard())
    async findRightGroupDetail(@Param('id') id): Promise<RightGroupDetailDto> {
        return await this.rightService.findRightGroupDetail(id);
    }

    @ApiBearerAuth()
    @Post()
    @UseGuards(AuthGuard())
    async create(@Body() rightGroup: RightGroupCreateDto) {
        return this.rightService.create(rightGroup);
    }
}
