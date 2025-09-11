import { Component } from '@angular/core';
import { LoginHeaderComponent } from './components/login-header.component';
import { LoginFeaturesComponent } from './components/login-features.component';

@Component({
  selector: 'app-login',
  imports: [LoginHeaderComponent, LoginFeaturesComponent],
  template: `
    <section class="space-y-8">
      <app-login-header />
      <app-login-features />
    </section>
  `,
  host: { class: 'flex items-center gap-16' },
})
export class LoginComponent {}
