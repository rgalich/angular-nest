import { RightGroup } from './../../../server/modules/right/right-group.entity';
import { Right } from './../../../server/modules/right/right.entity';
export class AllRightAndRightGroupDto {
    rights: Right[];

    rightGroups: RightGroup[];
}
