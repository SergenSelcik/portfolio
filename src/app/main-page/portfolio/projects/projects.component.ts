import { Component, HostListener, inject } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss',
    './projects-responsive.component.scss',
  ]
})
export class ProjectsComponent {
  projects = inject(ProjectsService).projects;
  translate = inject(TranslationService);

  screenWidth: number = window.innerWidth;

  constructor() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  getAosAttribute(swapcontent: boolean): string {
    if (this.screenWidth <= 1020) {
      return 'fade-down';
    }
    return swapcontent ? 'fade-down-left' : 'fade-down-right';
  }
}
