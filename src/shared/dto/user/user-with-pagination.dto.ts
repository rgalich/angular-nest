import { ApiModelProperty } from '@nestjs/swagger';
import { UserDto } from './UserDto';

export class UserWhithPaginationDto {
    users: UserDto[];

    pageTotal: number;
}
