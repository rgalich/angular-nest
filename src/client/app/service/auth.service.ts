import { UserLoginDto } from './../../../shared/dto/user/UserLoginDto';
import { AuthTokenDto } from './../../../shared/dto/auth/AuthTokenDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(user: UserLoginDto): Observable<AuthTokenDto> {
    return this.http.post<AuthTokenDto>(`${environment.baseUrl}/auth`, user).pipe(
        tap(e => this.setAuthStorage(e))
    );
  }

  expireAuthStorage(authStorage: string) {
      if (moment() > moment((JSON.parse(authStorage) as AuthTokenDto).expiresIn)) {
        this.removeAuthStorage();
        return null;
      }

      return authStorage;
  }

  setAuthStorage(authToken: AuthTokenDto) {
      window.localStorage.setItem('rememberMe', JSON.stringify(authToken));
  }

  getAuthStorage() {
    const authStorage = this.expireAuthStorage(window.localStorage.getItem('rememberMe'));
    return authStorage ? (JSON.parse(authStorage) as AuthTokenDto).accessToken : null;
  }

  removeAuthStorage() {
    window.localStorage.removeItem('rememberMe');
  }
}
