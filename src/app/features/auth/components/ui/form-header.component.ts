import { Component, inject, input } from '@angular/core';
import { IconComponent } from '../../../../shared/components';
import { AuthUiService } from '../../services/auth-ui.service';

@Component({
  selector: 'app-form-header',
  imports: [IconComponent],
  template: `
    <div
      class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
      [class]="gradient()">
      <app-icon [svg]="icon()" class="size-8 text-white"></app-icon>
    </div>
    <h3 class="text-2xl font-semibold tracking-tight">{{ title() }}</h3>
    <p class="text-base text-gray-500">{{ subtitle() }}</p>
  `,
  host: { class: 'flex flex-col items-center gap-1.5' },
})
export class FormHeaderComponent {
  private readonly authUi = inject(AuthUiService);

  icon = input.required<string>();
  title = input.required<string>();
  subtitle = input.required<string>();

  gradient = this.authUi.mainGradient;
}
