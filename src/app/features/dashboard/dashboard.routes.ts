import { Routes } from '@angular/router';

export default [
  {
    title: 'Home',
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
] as Routes;
