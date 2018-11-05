import { RightGroupDetailDto } from './../../../shared/dto/right/right-group-detail.dto';
import { RightGroupDto } from './../../../shared/dto/right/right-group.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { RightDto } from '../../../shared/dto/right/right.dto';
import { RightGroupCreateDto } from '../../../shared/dto/right/right-group-create.dto';

@Injectable({
  providedIn: 'root'
})
export class RightService {

  constructor(private http: HttpClient) { }

  findAllRightGroup(): Observable<RightGroupDto[]> {
    return this.http.get<RightGroupDto[]>(`${environment.baseUrl}/right/rightgroups`);
  }

  findAllRight(): Observable<RightDto[]> {
    return this.http.get<RightDto[]>(`${environment.baseUrl}/right/rights`);
  }

  findRightGroupDetail(rightGroupId: number): Observable<RightGroupDetailDto> {
    return this.http.get<RightGroupDetailDto>(`${environment.baseUrl}/right/rightgroup/${rightGroupId}`);
  }

  create(rightGroup: RightGroupCreateDto): Observable<RightGroupCreateDto> {
    return this.http.post<RightGroupCreateDto>(`${environment.baseUrl}/right`, rightGroup);
  }
}
