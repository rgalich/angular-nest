import { RightDto } from '../right/right.dto';

export class TransfertDto {
    id: number;

    title: string;

    direction: 'right' | 'left';

    disabled = false;

    checked = false;

    constructor(item: RightDto, direction: 'right' | 'left') {
        this.id = item.id;
        this.title = item.libelle;
        this.direction = direction;
    }
}
