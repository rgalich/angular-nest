import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
    }
];
