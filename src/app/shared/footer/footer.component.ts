import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate = inject(TranslationService)
  constructor(private router: Router) { }
  get isImprintRoute(): boolean {
    return this.router.url === '/imprint';
  }

  scrollToTop() {
    window.scrollTo(0, 0);
    history.pushState(null, '', window.location.pathname);
  }

  navigateToHome() {
    this.router.navigateByUrl('/');
  }

  isGerman(): boolean {
    return this.translate.getCurrentLanguage() === 'de';
  }
}
