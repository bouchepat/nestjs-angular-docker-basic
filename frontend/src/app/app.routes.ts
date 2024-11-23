import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", loadComponent: () => import('./auth/signin/signin.component').then(c => SigninComponent) },
];
