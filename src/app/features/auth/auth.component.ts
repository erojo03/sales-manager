import { Component } from '@angular/core';
import { AuthHeaderComponent } from './components/auth-header.component';
import { AuthFeaturesComponent } from './components/auth-features.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [AuthHeaderComponent, AuthFeaturesComponent, RouterOutlet],
  template: `
    <section class="hidden flex-1 space-y-8 lg:block">
      <app-auth-header />
      <app-auth-features />
    </section>

    <section
      class="flex w-full flex-col rounded-lg border-0 bg-white/80 p-6 text-gray-900 shadow-2xl backdrop-blur-sm sm:w-md lg:w-sm xl:w-md">
      <router-outlet />
    </section>
  `,
  host: {
    class: 'flex items-center justify-center gap-15 container',
  },
})
export class AuthComponent {}
