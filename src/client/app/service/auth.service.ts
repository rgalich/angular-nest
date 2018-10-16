import { UserCreateDto } from './../../../shared/dto/user/UserCreateDto';
import { UserLoginDto } from './../../../shared/dto/user/UserLoginDto';
import { AuthTokenDto } from './../../../shared/dto/auth/AuthTokenDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: UserLoginDto): Observable<AuthTokenDto> {
    return this.http.post<AuthTokenDto>(`${environment.baseUrl}/auth`, user).pipe(
        tap(e => this.setAuthStorage(e))
    );
  }

  logout() {
      window.localStorage.removeItem('rememberMe');
  }

  setAuthStorage(authToken: AuthTokenDto) {
      window.localStorage.setItem('rememberMe', authToken.accessToken);
  }

  getAuthStorage() {
      return window.localStorage.getItem('rememberMe');
  }
}
