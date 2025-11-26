import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUiService {
  private readonly router = inject(Router);
  private readonly navigationEnd$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  );
  private readonly url = toSignal(this.navigationEnd$);

  readonly isLoginRoute = computed(() => this.url()?.url.includes('login'));

  readonly mainGradient = computed(() =>
    this.isLoginRoute() ? 'login-gradient' : 'register-gradient'
  );

  readonly features = computed(() => {
    if (this.isLoginRoute()) {
      return {
        gradient: 'login-features-gradient',
        iconColor: 'text-blue-600',
      };
    }
    return {
      gradient: 'register-features-gradient',
      iconColor: 'text-green-600',
    };
  });
}
