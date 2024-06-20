import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: [
    './above-the-fold.component.scss', 
    './above-the-fold-responsive.component.scss'
  ]
})
export class AboveTheFoldComponent {
  arrows = [0, 1, 2, 3, 4];
  translate = inject(TranslationService);

  getArrowSrc(index: number): string {
    return `./assets/img/arrow_${index}.png`;
  }

  scrollToAboutMeSection(): void {
    const aboutMeElement = document.getElementById('about-me');
    if (aboutMeElement) {
      const aboutMePosition = aboutMeElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: aboutMePosition,
        behavior: 'smooth'
      });
    }
  }
}
