import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Login',
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((c) => c.LoginComponent),
  },
  {
    title: 'App',
    path: '',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    loadChildren: () => import('./features/dashboard/dashboard.routes'),
  },
];
