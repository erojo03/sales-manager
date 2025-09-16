import { Routes } from '@angular/router';

export default [
  {
    title: 'Login',
    path: 'login',
    loadComponent: () =>
      import('./components/login-form.component').then(
        (c) => c.LoginFormComponent
      ),
  },
  {
    title: 'Register',
    path: 'register',
    loadComponent: () =>
      import('./components/register-form.component').then(
        (c) => c.RegisterFormComponent
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
] as Routes;
