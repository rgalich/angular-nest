import { RightGroupDto } from './../right/right-group.dto';
import { UserWithRightGroupDto } from './user-with-right-group.dto';
export class UserDetailDto {
    user: UserWithRightGroupDto[];

    rightGroups: RightGroupDto[];
}
