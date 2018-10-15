import { UserCreateDto } from './../../../shared/dto/user/UserCreateDto';
import { UserLoginDto } from './../../../shared/dto/user/UserLoginDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: UserCreateDto): Observable<UserCreateDto> {
    return this.http.post<UserCreateDto>(`${environment.baseUrl}/user`, user);
  }

  login(user: UserLoginDto): Observable<UserLoginDto> {
    return this.http.post<UserLoginDto>(`${environment.baseUrl}/user/login`, user);
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/user`);
  }
}