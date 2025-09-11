import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  inject,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: ``,
  styles: [':host { display: inline-flex; }'],
})
export class IconComponent implements OnChanges {
  @Input({ required: true }) svg!: string;

  @HostBinding('innerHTML') sanitizedSvg: SafeHtml = '';

  private sanitizer = inject(DomSanitizer);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['svg']) {
      this.sanitizedSvg = this.sanitizer.bypassSecurityTrustHtml(this.svg);
    }
  }
}
