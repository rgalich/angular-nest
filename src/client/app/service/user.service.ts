import { UserCreateDto } from './../../../shared/dto/user/UserCreateDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserDto } from '../../../shared/dto/user/UserDto';
import { UserWhithPaginationDto } from '../../../shared/dto/user/user-with-pagination.dto';
import { PaginationDto } from '../../../shared/dto/pagination.dto';

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

  findAll(page: number, pageSize: number): Observable<UserWhithPaginationDto> {
    return this.http.get<UserWhithPaginationDto>(
      `${environment.baseUrl}/user`,
      { params: { page: page.toString(), pageSize: pageSize.toString() } }
    );
  }
}
