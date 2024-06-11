import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { MenuComponent } from './menu/menu.component';
import { AboutMeComponent } from '../about-me/about-me.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboveTheFoldComponent, MenuComponent, AboutMeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
