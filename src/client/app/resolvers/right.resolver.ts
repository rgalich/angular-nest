import { RightDto } from './../../../shared/dto/right/right.dto';
import { RightService } from '../service/right.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RightGroupDetailDto } from '../../../shared/dto/right/right-group-detail.dto';

@Injectable({
    providedIn: 'root'
  })
export class RightResolveGuard implements Resolve<RightDto[] | RightGroupDetailDto> {

    constructor(private rightService: RightService) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<RightDto[] | RightGroupDetailDto> {
        const rightGroupId = +route.paramMap.get('rightGroupId');
        console.log(rightGroupId);
        if (rightGroupId) {
            return this.rightService.findRightGroupDetail(rightGroupId);
        } else {
            return this.rightService.findAllRight();
        }
    }
}
