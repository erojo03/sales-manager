import { Component, inject, input } from '@angular/core';
import { IconComponent } from '../../../../shared/components';
import { arrowRightIcon } from '../../../../shared/icons';
import { AuthUiService } from '../../services/auth-ui.service';

@Component({
  selector: 'app-submit-button',
  imports: [IconComponent],
  template: `
    <button
      type="submit"
      [disabled]="disabled()"
      class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-base font-medium whitespace-nowrap text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      [class]="gradient()">
      {{ text() }}
      <app-icon [svg]="arrowRightIcon"></app-icon>
    </button>
  `,
  host: { class: 'block' },
})
export class SubmitButtonComponent {
  private readonly authUi = inject(AuthUiService);

  disabled = input.required<boolean>();
  text = input.required<string>();

  readonly arrowRightIcon = arrowRightIcon;

  gradient = this.authUi.mainGradient;
}
