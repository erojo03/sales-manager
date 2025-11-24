import { Component, inject } from '@angular/core';
import {
  Validators,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { IconComponent } from '../../../shared/components';
import {
  arrowRightIcon,
  boxIcon,
  eyeIcon,
  eyeOffIcon,
  starIcon,
} from '../../../shared/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [IconComponent, ReactiveFormsModule, RouterLink],
  template: `
    <section class="flex flex-col space-y-4 text-center">
      <div
        class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600">
        <app-icon [svg]="boxIcon" class="size-8 text-white"></app-icon>
      </div>
      <div class="space-y-2">
        <h3 class="text-2xl font-semibold tracking-tight">
          Bienvenido de vuelta
        </h3>
        <p class="text-base text-gray-500">
          Accede a tu dashboard de gestión empresarial
        </p>
      </div>
    </section>

    <form [formGroup]="loginForm" (ngSubmit)="login()" class="space-y-4">
      <label for="email" class="flex flex-col gap-2">
        <span class="text-sm leading-none font-medium text-gray-500">
          Usuario (Email)
        </span>
        <input
          id="email"
          type="email"
          formControlName="email"
          placeholder="ejem@mail.com"
          class="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-black ring-offset-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" />
        @if (email.invalid && (email.dirty || email.touched)) {
          <div class="text-start text-sm text-red-600">
            @if (email.hasError('required')) {
              <p>El email es requerido.</p>
            } @else if (email.hasError('email')) {
              <p>El formato del email no es válido.</p>
            }
          </div>
        }
      </label>

      <label for="password" class="flex flex-col gap-2">
        <span class="text-sm leading-none font-medium text-gray-500">
          Contraseña
        </span>
        <div class="relative">
          <input
            id="password"
            [type]="passwordVisible ? 'text' : 'password'"
            formControlName="password"
            placeholder="••••••••"
            class="hide-password-toggle h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 pr-10 text-black ring-offset-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" />
          <button
            type="button"
            (click)="togglePasswordVisibility()"
            class="absolute inset-y-0 right-0 flex cursor-pointer items-center px-3 text-gray-500 hover:text-gray-700">
            <app-icon
              [svg]="passwordVisible ? eyeOffIcon : eyeIcon"
              class="size-5"></app-icon>
          </button>
        </div>
        @if (password.invalid && (password.dirty || password.touched)) {
          <div class="text-start text-sm text-red-600">
            @if (password.hasError('required')) {
              <p>La contraseña es requerida.</p>
            }
          </div>
        }
      </label>
      <button
        type="submit"
        [disabled]="loginForm.invalid"
        class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-base font-medium whitespace-nowrap text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        Acceder al Dashboard
        <app-icon [svg]="arrowRightIcon"></app-icon>
      </button>

      <p class="text-center text-sm text-gray-500">
        ¿Aún no tienes una cuenta?
        <a
          routerLink="../register"
          class="font-medium text-blue-600 hover:text-blue-700 hover:underline">
          Regístrate aquí
        </a>
      </p>
    </form>

    <hr class="my-4" />

    <section class="space-y-2">
      <p class="text-center text-sm font-medium text-gray-500">
        ¿Qué puedes hacer en la app?
      </p>
      <ul
        class="list-inside list-disc space-y-1 text-sm text-gray-500 marker:text-green-600">
        @for (feature of appFeatures; track feature) {
          <li>{{ feature }}</li>
        }
      </ul>
    </section>
  `,
  host: { class: 'contents space-y-6' },
})
export class LoginFormComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  passwordVisible = false;

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  readonly boxIcon = boxIcon;
  readonly starIcon = starIcon;
  readonly arrowRightIcon = arrowRightIcon;
  readonly eyeIcon = eyeIcon;
  readonly eyeOffIcon = eyeOffIcon;
  readonly appFeatures: string[] = [
    'Ver dashboard con métricas en tiempo real',
    'Gestionar productos e inventario',
    'Procesar órdenes de clientes',
    'Analizar reportes de ventas',
  ];

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    // TODO: Implement authentication logic
    console.log('Login form submitted:', this.loginForm.getRawValue());
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
