import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = inject(ProjectsService).projects;
}
