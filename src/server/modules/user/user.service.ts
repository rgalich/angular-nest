import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserCreateDto } from '../../../shared/dto/user/UserCreateDto';
import { BcryptService } from '../../core/service/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private bcryptService: BcryptService
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: UserCreateDto): Promise<UserCreateDto> {
    await this.bcryptService.generateHash(user.password);
    return await this.userRepository.save(user);
  }
}
