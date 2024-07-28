import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../../services/skill.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss',
    './skills-responsive.component.scss',
  ]
})
export class SkillsComponent {
  skills = inject(SkillService).skills;
}