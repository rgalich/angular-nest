import { TransfertDto } from './transfert.dto';

export class TransfertChangeDto {

    from: 'right' | 'left';

    to: 'right' | 'left';

    list: TransfertDto[];
}
