import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

    private token: string;

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('eee');
        return next.handle(req);
    }

    setToken(value: string) {
        this.token = value;
    }

    removeToken() {
        this.token = null;
    }
}

