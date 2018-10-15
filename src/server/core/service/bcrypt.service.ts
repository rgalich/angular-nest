import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BcryptService {

    constructor() { }

    async generateHash(myPlaintextPassword: String): Promise<string> {

        let hashPassword = '';

        await bcrypt.hash(myPlaintextPassword, 10).then((hash) => {
            hashPassword =  hash;
        });

        return hashPassword;
    }

    async compareHash(myPlaintextPassword: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(myPlaintextPassword, hash);
    }
}
