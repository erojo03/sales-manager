import { Component } from '@angular/core';
import { AuthHeaderComponent } from './components/auth-header.component';
import { AuthFeaturesComponent } from './components/auth-features.component';

@Component({
  selector: 'app-auth',
  imports: [AuthHeaderComponent, AuthFeaturesComponent],
  template: `
    <section class="hidden space-y-8 lg:block">
      <app-auth-header />
      <app-auth-features />
    </section>
  `,
  host: {
    class: 'flex items-center justify-center p-2.5 gap-15 lg:p-5 container',
  },
})
export class AuthComponent {}
