import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { LoggedGuard } from './guards/logged.guard';

export const ROUTES: Routes = [
    {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        canActivate: [LoggedGuard]
    }
];
