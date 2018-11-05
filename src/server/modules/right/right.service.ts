import { RightGroupDetailDto } from './../../../shared/dto/right/right-group-detail.dto';
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

  async findRightGroupById(rightGroupId: number) {
    return await this.rightGroupRepository.findOneOrFail(rightGroupId, { relations: ['rights'] });
  }

  async create(createRightGroup: RightGroupCreateDto) {
    const rightGroup = new RightGroup();
    rightGroup.libelle = createRightGroup.libelle;
    rightGroup.rights = createRightGroup.rightsId.map(e => new Right(e));
    return await this.rightGroupRepository.save(rightGroup);
  }

  async findRightGroupDetail(rightGroupId: number) {
    const rightGroupDetail = new RightGroupDetailDto();
    const rightGroup = await this.findRightGroupById(rightGroupId);
    const rights = await this.findAllRight();
    rightGroupDetail.id = rightGroup.id;
    rightGroupDetail.libelle = rightGroup.libelle;
    rightGroupDetail.rightsId = rightGroup.rights.map(e => e.id);
    rightGroupDetail.rights = rights;
    return rightGroupDetail;
  }
}
