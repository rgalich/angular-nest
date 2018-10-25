import { UserLoginDto } from './../../../shared/dto/user/UserLoginDto';
import { AuthTokenDto } from './../../../shared/dto/auth/AuthTokenDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) {
    this.initUserConnect();
  }

  login(user: UserLoginDto): Observable<AuthTokenDto> {
    return this.http.post<AuthTokenDto>(`${environment.baseUrl}/auth`, user).pipe(
      tap(e => {
        this.setAuthStorage(e);
        this.userService.userConnect = e.user;
      })
    );
  }

  expireAuthStorage(authStorage: string) {
    if (authStorage && moment() > moment((JSON.parse(authStorage) as AuthTokenDto).expiresIn)) {
      this.removeAuthStorage();
      return null;
    }

    return authStorage;
  }

  setAuthStorage(authToken: AuthTokenDto) {
    window.localStorage.setItem('rememberMe', JSON.stringify(authToken));
  }

  initUserConnect() {
    const authStorage = this.expireAuthStorage(window.localStorage.getItem('rememberMe'));
    this.userService.userConnect = authStorage ? (JSON.parse(authStorage) as AuthTokenDto).user : null;
  }

  getAuthStorage() {
    const authStorage = this.expireAuthStorage(window.localStorage.getItem('rememberMe'));
    return authStorage ? (JSON.parse(authStorage) as AuthTokenDto).accessToken : null;
  }

  removeAuthStorage() {
    window.localStorage.removeItem('rememberMe');
    this.userService.userConnect = null;
  }
}
