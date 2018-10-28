import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Right } from './right.entity';
import { RightGroup } from './right-group.entity';

@Injectable()
export class RightService {
  constructor(
    @InjectRepository(Right)
    private readonly rightRepository: Repository<Right>,
    @InjectRepository(RightGroup)
    private readonly rightGroupRepository: Repository<RightGroup>
  ) {}

  async findAllRight() {
    return await this.rightRepository.find({ order: { libelle: 'ASC' } });
  }

  async findAllRightGroup() {
    return await this.rightGroupRepository.find({ order: { libelle: 'ASC' } });
  }


}
