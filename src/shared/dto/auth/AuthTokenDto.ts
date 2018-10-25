import { UserDto } from '../user/UserDto';

export class AuthTokenDto {
    user: UserDto;

    expiresIn: string;

    accessToken: string;
}
