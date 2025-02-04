import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: '/main'
    },
    {
        path: 'main',
        component: MainComponent, 
        ...canActivate( () => redirectUnauthorizedTo(['login']))
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        redirectTo: 'main'
    }
];
