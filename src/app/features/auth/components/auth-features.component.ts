import { Component } from '@angular/core';
import { IconComponent } from '../../../shared/components';
import {
  boxIcon,
  lightningIcon,
  shieldIcon,
  shoppingCartIcon,
  starIcon,
  statisticsIcon,
  usersIcon,
} from '../../../shared/icons';

interface Feature {
  id: number;
  text: string;
  svg: string;
}

interface FeatureWithContent extends Feature {
  title: string;
}

@Component({
  selector: 'app-auth-features',
  imports: [IconComponent],
  template: `
    <section class="flex flex-wrap gap-4">
      @for (feature of features; track feature.id) {
        <div
          class="flex items-center gap-2 rounded-full border-1 border-gray-200 bg-white px-4 py-2 shadow-sm">
          <app-icon
            [svg]="feature.svg"
            class="size-4 text-green-600"></app-icon>

          <span class="text-sm font-medium">{{ feature.text }}</span>
        </div>
      }
    </section>

    <section class="grid gap-4 sm:grid-cols-2">
      @for (feature of featuresWithContent; track feature.id) {
        <div
          class="flex items-start gap-3 rounded-xl border border-gray-200 bg-white/50 p-4 transition-all hover:bg-white hover:shadow-md">
          <div
            class="flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 p-2">
            <app-icon
              [svg]="feature.svg"
              class="size-5 text-blue-600"></app-icon>
          </div>

          <div class="space-y-1">
            <h3 class="font-semibold">{{ feature.title }}</h3>
            <p class="text-muted-foreground text-sm">{{ feature.text }}</p>
          </div>
        </div>
      }
    </section>
  `,
  host: { class: 'space-y-8' },
})
export class AuthFeaturesComponent {
  readonly features: Feature[] = [
    {
      id: 1,
      text: 'Rápido y eficiente',
      svg: lightningIcon,
    },
    {
      id: 2,
      text: 'Seguro y confiable',
      svg: shieldIcon,
    },
    {
      id: 3,
      text: 'Fácil de usar',
      svg: starIcon,
    },
  ];

  readonly featuresWithContent: FeatureWithContent[] = [
    {
      id: 1,
      title: 'Gestión de Órdenes',
      text: 'Procesa y rastrea órdenes de manera eficiente',
      svg: shoppingCartIcon,
    },
    {
      id: 2,
      title: 'Control de Inventario',
      text: 'Mantén tu stock organizado y actualizado',
      svg: boxIcon,
    },
    {
      id: 3,
      title: 'Reportes Avanzados',
      text: 'Analiza el rendimiento de tu negocio',
      svg: statisticsIcon,
    },
    {
      id: 4,
      title: 'Base de Clientes',
      text: 'Administra la información de tus clientes',
      svg: usersIcon,
    },
  ];
}
