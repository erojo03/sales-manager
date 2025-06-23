import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  host: { class: 'block h-full mx-auto px-4 max-w-7xl' },
})
export class AppComponent {}
