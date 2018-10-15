import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { BcryptService } from '../../core/service/bcrypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, BcryptService],
  controllers: [UserController],
})
export class UserModule {}
