import { UserCreateDto } from './../../../shared/dto/user/UserCreateDto';
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

  findAll(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/user`);
  }
}
