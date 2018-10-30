import { RightDto } from '../right/right.dto';

export class TransfertDto {
    id: number;

    title: string;

    direction = 'right';

    disabled = false;

    checked = false;

    constructor(item: RightDto) {
        this.id = item.id;
        this.title = item.libelle;
    }
}
