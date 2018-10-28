import { AllRightAndRightGroupDto } from './../../../shared/dto/right/all-right-and-right-group.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RightService {

  constructor(private http: HttpClient) { }

  findAllRightAndRightGroup(): Observable<AllRightAndRightGroupDto> {
    return this.http.get<AllRightAndRightGroupDto>(`${environment.baseUrl}/right`);
  }
}
