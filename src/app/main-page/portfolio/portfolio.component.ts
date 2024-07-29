import { Component, inject } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss',
    './portfolio-responsive.component.scss'
  ]
})
export class PortfolioComponent {
  firstHover = true;
  translate = inject(TranslationService);

  onHover() {
    if (this.firstHover) {
      this.firstHover = false;
    }
  }

  isGerman(): boolean {
    return this.translate.getCurrentLanguage() === 'de';
  }
}
