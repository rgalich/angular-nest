import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserCreateDto } from '../../../shared/dto/user/UserCreateDto';
import { UserLoginDto } from '../../../shared/dto/user/UserLoginDto';
import { UserWhithPaginationDto } from '../../../shared/dto/user/user-with-pagination.dto';
import { BcryptService } from '../../core/service/bcrypt.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private bcryptService: BcryptService
  ) {}

  async findAll(page: number, pageSize: number): Promise<UserWhithPaginationDto> {

    const userTotal = await this.userRepository.count();
    const pageTotal = Math.ceil(userTotal / pageSize);
    const users = await this.userRepository.find({
                    order: { lastName: 'ASC' },
                    skip: page * pageSize,
                    take: pageSize
                  });

    const userWithPagination = new UserWhithPaginationDto();
    userWithPagination.pageTotal = pageTotal;
    userWithPagination.users = users;

    return userWithPagination;
  }

  async findByMail(mail: string): Promise<User> {
    return await this.userRepository.findOne({ mail: mail.toLowerCase().trim() });
  }

  async create(user: UserCreateDto): Promise<UserCreateDto> {
    user.password = await this.bcryptService.generateHash(user.password);
    return await this.userRepository.save(user);
  }

  async login(userLogin: UserLoginDto): Promise<boolean> {
    const user = await this.findByMail(userLogin.mail);
    return user ? this.bcryptService.compareHash(userLogin.password, user.password) : false;
  }
}
