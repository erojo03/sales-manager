import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Auth',
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth.component').then((c) => c.AuthComponent),
    loadChildren: () => import('./features/auth/auth.routes'),
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
