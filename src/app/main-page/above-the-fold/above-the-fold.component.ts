import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  arrows = [0, 1, 2, 3, 4];

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
