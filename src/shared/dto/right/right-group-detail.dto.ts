import { RightDto } from './right.dto';

export class RightGroupDetailDto {
    id: number;

    libelle: string;

    rightsId: number[];

    rights: RightDto[];
}

