import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = inject(ProjectsService).projects;
  translate = inject(TranslationService);
}
