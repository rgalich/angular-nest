import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Right } from './right.entity';
import { RightGroup } from './right-group.entity';
import { RightGroupCreateDto } from '../../../shared/dto/right/right-group-create.dto';

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

  async create(createRightGroup: RightGroupCreateDto) {
    const rightGroup = new RightGroup();
    rightGroup.libelle = createRightGroup.libelle;
    rightGroup.Rights = createRightGroup.rightsId.map(e => new Right(e));
    return await this.rightGroupRepository.save(rightGroup);
  }
}
