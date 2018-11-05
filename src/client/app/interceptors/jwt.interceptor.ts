import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorHandler } from '@angular/router/src/router';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

    loading = false;

    constructor(private authService: AuthService, private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.loading = true;
            }

            if (event instanceof NavigationEnd) {
                this.loading = false;
            }
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getAuthStorage();
        const clone = token ? req.clone({ setHeaders: { 'Authorization': `Bearer ${token}` }}) : req;

        return next.handle(clone).pipe(
            catchError((errorResponse: HttpErrorResponse) => {
                if (errorResponse.status === 401) {
                    this.router.navigateByUrl('/authentication');
                }
                return throwError(errorResponse);
            })
        );
    }
}

