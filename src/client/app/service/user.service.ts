import { UserCreateDto } from './../../../shared/dto/user/UserCreateDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserDto } from '../../../shared/dto/user/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: UserDto;

  constructor(private http: HttpClient) { }

  register(user: UserCreateDto): Observable<UserCreateDto> {
    return this.http.post<UserCreateDto>(`${environment.baseUrl}/user`, user);
  }

  get userConnect() {
    return this.user;
  }

  set userConnect(user: UserDto) {
    this.user = user;
  }

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/user`);
  }
}
