import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../../../shared/dto/user/UserLoginDto';
import { AuthTokenDto } from '../../../shared/dto/auth/AuthTokenDto';
import * as moment from 'moment';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let authService: AuthService;

    const user: UserLoginDto = { mail: 'test@test.test', password: 'test' };
    const authToken: AuthTokenDto = { expiresIn: moment().toISOString(), accessToken: 'testtokken' };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        authService = TestBed.get(AuthService);
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('req login', () => {
        spyOn(authService, 'setAuthStorage');

        authService.login(user).subscribe();
        const req = httpTestingController.expectOne({ method: 'POST', url: `${environment.baseUrl}/auth` });
        expect(req.request.body).toEqual(user);
        req.flush(authToken);
        expect(authService.setAuthStorage).toHaveBeenCalledWith(authToken);
    });

});
