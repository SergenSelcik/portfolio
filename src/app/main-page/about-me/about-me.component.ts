import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss',
    './about-me-responsive.component.scss',
  ]
})
export class AboutMeComponent {
  firstHover = true;
  translate = inject(TranslationService);

  onHover() {
    if (this.firstHover) {
      this.firstHover = false;
    }
  }
}
