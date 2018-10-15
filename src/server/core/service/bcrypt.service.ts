import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptService {

    constructor() { }

    async generateHash(myPlaintextPassword: String): Promise<string> {
        return await bcrypt.hash(myPlaintextPassword, 10);
    }

    async compareHash(myPlaintextPassword: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(myPlaintextPassword, hash);
    }
}
