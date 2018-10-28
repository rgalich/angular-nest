import { RightGroupDto } from './../../../shared/dto/right/right-group.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RightService {

  constructor(private http: HttpClient) { }

  findAllRightGroup(): Observable<RightGroupDto[]> {
    return this.http.get<RightGroupDto[]>(`${environment.baseUrl}/right/rightgroups`);
  }
}
