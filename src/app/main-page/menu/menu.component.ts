import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss',
    './menu-responsive.component.scss',
  ]
})
export class MenuComponent {
  translate = inject(TranslationService);

  isGerman(): boolean {
    return this.translate.getCurrentLanguage() === 'de';
  }
}
