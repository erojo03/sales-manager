import { Component } from '@angular/core';

@Component({
  selector: 'app-login-header',
  imports: [],
  template: `
    <span
      class="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-2.5 py-0.5 text-xs font-semibold text-white"
      >🚀 Sistema de Gestión Completo
    </span>
    <h1 class="text-4xl font-bold tracking-tight lg:text-6xl">
      Gestiona tu
      <span
        class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
export class LoginHeaderComponent {}
