import { ApiModelProperty } from '@nestjs/swagger';
import { UserDto } from './UserDto';

export class UserWhithPaginationDto {
    @ApiModelProperty()
    users: UserDto[];
    @ApiModelProperty()
    pageTotal: number;
}
