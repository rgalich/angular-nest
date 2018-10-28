import { RightService } from '../service/right.service';
import { AllRightAndRightGroupDto } from '../../../shared/dto/right/all-right-and-right-group.dto';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class RightResolveGuard implements Resolve<AllRightAndRightGroupDto> {

    constructor(private rightService: RightService) {}

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<AllRightAndRightGroupDto> {
        return this.rightService.findAllRightAndRightGroup();
    }
}
