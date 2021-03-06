import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../../../shared/dto/user/UserLoginDto';
import { AuthTokenDto } from '../../../shared/dto/auth/AuthTokenDto';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import {} from 'jasmine';
import { UserDto } from '../../../shared/dto/user/UserDto';

describe('AuthService', () => {
    let httpTestingController: HttpTestingController;
    let authService: AuthService;
    let userService: UserService;

    const user: UserLoginDto = { mail: 'test@test.test', password: 'test' };
    const userDto: UserDto = { id: 1, firstName: 'firstNameTest', lastName: 'lastNameTest', mail: 'test@test.test' };
    const authToken: AuthTokenDto = { user: userDto, expiresIn: moment().toISOString(), accessToken: 'testtokken' };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        authService = TestBed.get(AuthService);
        userService = TestBed.get(UserService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('login', () => {
        spyOn(authService, 'setAuthStorage');

        authService.login(user).subscribe();
        const req = httpTestingController.expectOne({ method: 'POST', url: `${environment.baseUrl}/auth` });
        expect(req.request.body).toEqual(user);
        req.flush(authToken);
        expect(authService.setAuthStorage).toHaveBeenCalledWith(authToken);
        expect(userService.userConnect).toBe(authToken.user);
    });

    it('setAuthStorage', () => {
        spyOn(Storage.prototype, 'setItem');

        authService.setAuthStorage(authToken);
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('rememberMe', JSON.stringify(authToken));
    });

    it('removeAuthStorage', () => {
        spyOn(Storage.prototype, 'removeItem');

        authService.removeAuthStorage();
        expect(Storage.prototype.removeItem).toHaveBeenCalledWith('rememberMe');
        expect(userService.userConnect).toBeNull();
    });

    it('Token expired', () => {
        spyOn(authService, 'removeAuthStorage');
        authToken.expiresIn = moment().add(-1, 'y').toISOString();
        const storage = authService.expireAuthStorage(JSON.stringify(authToken));

        expect(authService.removeAuthStorage).toHaveBeenCalled();
        expect(storage).toBeNull('Token espired');
    });

    it('Token not expired', () => {
        spyOn(authService, 'removeAuthStorage');
        authToken.expiresIn = moment().add(1, 'y').toISOString();
        const storage = authService.expireAuthStorage(JSON.stringify(authToken));

        expect(authService.removeAuthStorage).not.toHaveBeenCalled();
        expect(storage).toBe(JSON.stringify(authToken));
    });

    it('Not exist token', () => {
        spyOn(authService, 'expireAuthStorage').and.returnValue(null);
        const storage = authService.getAuthStorage();

        expect(authService.expireAuthStorage).toHaveBeenCalled();
        expect(storage).toBe(null);
    });

    it('Exist token', () => {
        spyOn(authService, 'expireAuthStorage').and.returnValue(JSON.stringify(authToken));
        const storage = authService.getAuthStorage();

        expect(authService.expireAuthStorage).toHaveBeenCalled();
        expect(storage).toBe(authToken.accessToken);
    });

    it('initUserConnect return user', () => {
        spyOn(authService, 'expireAuthStorage').and.returnValue(JSON.stringify(authToken));
        authService.initUserConnect();

        expect(userService.userConnect.id).toBe(userDto.id);
    });

    it('initUserConnect return null', () => {
        spyOn(authService, 'expireAuthStorage').and.returnValue(null);
        authService.initUserConnect();

        expect(userService.userConnect).toBeNull();
    });

});
