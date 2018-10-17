import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ErrorHandler } from '@angular/router/src/router';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) {}

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

