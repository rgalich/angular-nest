import { RightService } from '../service/right.service';
import { RightGroupDto } from '../../../shared/dto/right/right-group.dto';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class RightResolveGuard implements Resolve<RightGroupDto[]> {

    constructor(private rightService: RightService) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<RightGroupDto[]> {
        return this.rightService.findAllRightGroup();
    }
}
