import { RightDto } from './../../../shared/dto/right/right.dto';
import { RightService } from '../service/right.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class RightResolveGuard implements Resolve<RightDto[]> {

    constructor(private rightService: RightService) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<RightDto[]> {
        return this.rightService.findAllRight();
    }
}
