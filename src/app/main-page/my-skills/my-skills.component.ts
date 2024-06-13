import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  firstHover = true;

  onHover() {
    if (this.firstHover) {
      this.firstHover = false;
    }
  }
}
