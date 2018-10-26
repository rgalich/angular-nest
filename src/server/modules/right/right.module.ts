import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { Right } from './right.entity';
import { RightService } from './right.service';
import { RightController } from './right.controller';
import { RightGroup } from './right-group.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Right, RightGroup])
  ],
  providers: [RightService],
  controllers: [RightController],
  exports: [RightService]
})
export class RightModule {}
