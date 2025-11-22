import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth-header',
  imports: [],
  template: `
    <span
      class="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-sm font-semibold text-white"
      [class]="gradient()"
      >🚀 Sistema de Gestión Completo
    </span>
    <h1 class="text-4xl font-bold tracking-tight lg:text-6xl">
      Gestiona tu
      <span class="bg-clip-text text-transparent" [class]="gradient()">
        tienda de abarrotes
      </span>
      como un profesional
    </h1>
    <p class="text-xl leading-relaxed text-[#64748B]">
      Controla inventario, procesa órdenes, gestiona clientes y analiza el
      rendimiento de tu negocio desde una sola plataforma.
    </p>
  `,
  host: { class: 'block space-y-4' },
})
export class AuthHeaderComponent {
  private readonly router = inject(Router);
  private readonly navigationEnd$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd)
  );
  private readonly url = toSignal(this.navigationEnd$);

  readonly isLoginRoute = computed(() => this.url()?.url.includes('login'));
  readonly gradient = computed(() =>
    this.isLoginRoute()
      ? 'bg-gradient-to-r from-blue-600 to-purple-600'
      : 'bg-gradient-to-r from-green-600 to-blue-600'
  );
}
