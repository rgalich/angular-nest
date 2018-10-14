import bcrypt from 'bcrypt';

export class BcryptService {

    constructor() { }

    generateHash(myPlaintextPassword: String) {
        bcrypt.hash(myPlaintextPassword, 10).then(function(hash) {
            myPlaintextPassword = hash;
        });
    }
}
