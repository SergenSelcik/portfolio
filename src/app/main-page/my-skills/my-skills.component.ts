import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, SkillsComponent, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
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
