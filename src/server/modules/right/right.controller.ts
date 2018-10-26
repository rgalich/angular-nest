import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { RightService } from './right.service';

@Controller('Right')
export class RightController {
    constructor(private readonly rightService: RightService) {}


}
