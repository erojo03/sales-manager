import { Component, inject } from '@angular/core';
import { AuthUiService } from '../services/auth-ui.service';

@Component({
  selector: 'app-auth-header',
  imports: [],
  template: `
    <span
      class="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-sm font-semibold text-white"
      [class]="authUi.mainGradient()">
      🚀 Sistema de Gestión Completo
    </span>
    <h1 class="text-4xl font-bold tracking-tight lg:text-6xl">
      Gestiona tu
      <span [class]="authUi.mainGradient() + ' bg-clip-text text-transparent'">
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
  readonly authUi = inject(AuthUiService);
}
