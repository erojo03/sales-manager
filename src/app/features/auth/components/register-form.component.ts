import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../../shared/components';
import {
  arrowRightIcon,
  eyeIcon,
  eyeOffIcon,
  storeIcon,
  userIcon,
  buildingIcon,
} from '../../../shared/icons';

@Component({
  selector: 'app-register-form',
  imports: [IconComponent, ReactiveFormsModule, RouterLink],
  template: `
    <section class="flex flex-col items-center gap-1.5">
      <div
        class="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-blue-600">
        <app-icon [svg]="storeIcon" class="size-8 text-white"></app-icon>
      </div>
      <h3 class="text-xl font-semibold tracking-tight">Crear cuenta</h3>
      <p class="text-muted-foreground text-sm">
        Comienza tu prueba gratuita en 2 minutos
      </p>
    </section>

    <section>
      <div
        role="tablist"
        class="grid h-10 w-full grid-cols-2 items-center justify-center rounded-md bg-slate-100 p-1"
        tabindex="0">
        <button
          type="button"
          role="tab"
          [attr.data-state]="activeTab === 'personal' ? 'active' : 'inactive'"
          [attr.aria-selected]="activeTab === 'personal'"
          [tabindex]="activeTab === 'personal' ? 0 : -1"
          (click)="setActiveTab('personal')"
          class="inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm">
          <app-icon [svg]="userIcon" class="mr-1 size-3"></app-icon>
          Personal
        </button>
        <button
          type="button"
          role="tab"
          [attr.data-state]="activeTab === 'negocio' ? 'active' : 'inactive'"
          [attr.aria-selected]="activeTab === 'negocio'"
          [tabindex]="activeTab === 'negocio' ? 0 : -1"
          (click)="setActiveTab('negocio')"
          class="inline-flex cursor-pointer items-center justify-center rounded-sm px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all hover:bg-white/70 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm">
          <app-icon [svg]="buildingIcon" class="mr-1 size-3"></app-icon>
          Negocio
        </button>
      </div>
    </section>

    <form [formGroup]="registerForm" (ngSubmit)="register()" class="space-y-3">
      @if (activeTab === 'personal') {
        <div class="grid grid-cols-2 gap-4">
          <label for="name" class="flex flex-col gap-2">
            <span class="text-sm leading-none font-medium text-gray-500">
              Nombre completo
            </span>
            <input
              id="name"
              type="text"
              formControlName="name"
              placeholder="John Doe"
              class="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-black ring-offset-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" />
            @if (name.invalid && (name.dirty || name.touched)) {
              <div class="text-start text-sm text-red-600">
                @if (name.hasError('required')) {
                  <p>El nombre es requerido.</p>
                }
              </div>
            }
          </label>
          <label for="phone" class="flex flex-col gap-2">
            <span class="text-sm leading-none font-medium text-gray-500">
              Teléfono
            </span>
            <input
              id="phone"
              type="tel"
              formControlName="phone"
              placeholder="123 456 7890"
              class="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-black ring-offset-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" />
          </label>
        </div>

        <label for="email" class="flex flex-col gap-2">
          <span class="text-sm leading-none font-medium text-gray-500">
            Email
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

        <div class="grid grid-cols-2 gap-4">
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
                } @else if (password.hasError('minlength')) {
                  <p>La contraseña debe tener al menos 6 caracteres.</p>
                }
              </div>
            }
          </label>

          <label for="confirmPassword" class="flex flex-col gap-2">
            <span class="text-sm leading-none font-medium text-gray-500">
              Confirmar Contraseña
            </span>
            <div class="relative">
              <input
                id="confirmPassword"
                [type]="passwordVisible ? 'text' : 'password'"
                formControlName="confirmPassword"
                placeholder="••••••••"
                class="hide-password-toggle h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 pr-10 text-black ring-offset-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" />
            </div>
            @if (
              confirmPassword.invalid &&
              (confirmPassword.dirty || confirmPassword.touched)
            ) {
              <div class="text-start text-sm text-red-600">
                @if (confirmPassword.hasError('required')) {
                  <p>La confirmación de la contraseña es requerida.</p>
                }
              </div>
            } @else if (
              registerForm.hasError('passwordsMismatch') &&
              (confirmPassword.dirty || confirmPassword.touched)
            ) {
              <div class="text-start text-sm text-red-600">
                <p>Las contraseñas no coinciden.</p>
              </div>
            }
          </label>
        </div>
      } @else {
        <label for="storeName" class="flex flex-col gap-2">
          <span class="text-sm leading-none font-medium text-gray-500">
            Nombre de la tienda
          </span>
          <input
            id="storeName"
            type="text"
            formControlName="storeName"
            placeholder="Mi Tiendita"
            class="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-black ring-offset-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none" />
          @if (storeName.invalid && (storeName.dirty || storeName.touched)) {
            <div class="text-start text-sm text-red-600">
              @if (storeName.hasError('required')) {
                <p>El nombre de la tienda es requerido.</p>
              }
            </div>
          }
        </label>
        <label for="businessType" class="flex flex-col gap-2">
          <span class="text-sm leading-none font-medium text-gray-500">
            Tipo de negocio
          </span>
          <select
            id="businessType"
            formControlName="businessType"
            class="h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-black ring-offset-white placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none">
            <option value="" disabled>Selecciona un tipo</option>
            <option value="abarrotes">Abarrotes</option>
            <option value="ropa">Ropa</option>
            <option value="tecnologia">Tecnología</option>
            <option value="otro">Otro</option>
          </select>
          @if (
            businessType.invalid && (businessType.dirty || businessType.touched)
          ) {
            <div class="text-start text-sm text-red-600">
              @if (businessType.hasError('required')) {
                <p>El tipo de negocio es requerido.</p>
              }
            </div>
          }
        </label>
      }

      <hr class="my-4 border-slate-200" />

      <div class="space-y-2 pt-2">
        <div class="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            formControlName="terms"
            class="mt-0.5 size-4 shrink-0 cursor-pointer rounded-sm border border-gray-400 text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" />
          <label for="terms" class="text-sm text-gray-600">
            Acepto los
            <a
              href="#"
              class="font-medium text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer">
              términos y política de privacidad
            </a>
          </label>
        </div>
        @if (terms.invalid && (terms.dirty || terms.touched)) {
          <div class="text-start text-sm text-red-600">
            <p>Debes aceptar los términos y la política de privacidad.</p>
          </div>
        }
      </div>

      <button
        type="submit"
        [disabled]="registerForm.invalid"
        class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-green-600 to-blue-600 px-4 py-2 text-base font-medium whitespace-nowrap text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-blue-700 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        Crear mi cuenta
        <app-icon [svg]="arrowRightIcon"></app-icon>
      </button>

      <p class="text-center text-sm text-gray-500">
        ¿Ya tienes una cuenta?
        <a
          routerLink="../login"
          class="font-medium text-blue-600 hover:text-blue-700 hover:underline">
          Inicia sesión aquí
        </a>
      </p>
    </form>
  `,
  host: { class: 'contents space-y-6' },
})
export class RegisterFormComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  private passwordsMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordsMismatch: true }
      : null;
  };

  readonly storeIcon = storeIcon;
  readonly userIcon = userIcon;
  readonly buildingIcon = buildingIcon;
  readonly arrowRightIcon = arrowRightIcon;
  readonly eyeIcon = eyeIcon;
  readonly eyeOffIcon = eyeOffIcon;

  registerForm = this.fb.group(
    {
      name: ['', [Validators.required]],
      storeName: ['', [Validators.required]],
      phone: [''],
      businessType: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]],
      newsletter: [false],
    },
    { validators: this.passwordsMatchValidator }
  );

  activeTab: 'personal' | 'negocio' = 'personal';
  passwordVisible = false;

  get name() {
    return this.registerForm.controls.name;
  }

  get storeName() {
    return this.registerForm.controls.storeName;
  }

  get businessType() {
    return this.registerForm.controls.businessType;
  }

  get email() {
    return this.registerForm.controls.email;
  }

  get password() {
    return this.registerForm.controls.password;
  }

  get phone() {
    return this.registerForm.controls.phone;
  }

  get confirmPassword() {
    return this.registerForm.controls.confirmPassword;
  }

  get terms() {
    return this.registerForm.controls.terms;
  }

  setActiveTab(tab: 'personal' | 'negocio'): void {
    this.activeTab = tab;
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    // TODO: Implement registration logic
    console.log('Register form submitted:', this.registerForm.getRawValue());
  }
}
