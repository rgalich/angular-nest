import { UserDto } from './UserDto';
import { RightGroupDto } from './../right/right-group.dto';

export class UserWithRightGroupDto extends UserDto {
    rightGroups: RightGroupDto[];
}
