import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './shared/header/header.component';
import AOS from 'aos'; 
import 'aos/dist/aos.css';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainPageComponent, HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor() {
    AOS.init();
  }
}
