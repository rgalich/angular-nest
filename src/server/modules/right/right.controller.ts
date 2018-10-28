import { AllRightAndRightGroupDto } from './../../../shared/dto/right/all-right-and-right-group.dto';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RightService } from './right.service';
import _ from 'lodash';
import { Right } from './right.entity';

@Controller('Right')
export class RightController {
    constructor(private readonly rightService: RightService) {}

    @Get()
    @UseGuards(AuthGuard())
    async findRightAndRightGroupAll(): Promise<AllRightAndRightGroupDto> {
        const rights = await this.rightService.findAllRight();
        const rightGroups = await this.rightService.findAllRightGroup();

        return { rights, rightGroups };
    }
}
