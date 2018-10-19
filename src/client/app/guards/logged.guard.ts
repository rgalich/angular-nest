
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'app/service/auth.service';

@Injectable()
export class LoggedGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.getAuthStorage()) {
            this.router.navigate(['/authentication']);
        }
        return true;
    }
}
