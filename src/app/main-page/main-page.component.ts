import { Component } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboveTheFoldComponent , MySkillsComponent, AboutMeComponent, PortfolioComponent, RouterOutlet, ContactComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
