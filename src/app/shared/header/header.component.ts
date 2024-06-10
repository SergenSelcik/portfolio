import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../../main-page/above-the-fold/above-the-fold.component';
import { Router, RouterLink } from '@angular/router';
import { MenuComponent } from '../../main-page/menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AboveTheFoldComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  images: string[] = [
    './assets/img/burger_menu_0.png',
    './assets/img/burger_menu_1.png',
    './assets/img/burger_menu_2.png',
    './assets/img/burger_menu_3.png',
    './assets/img/burger_menu_4.png'
  ];
  reverseImages: string[] = [
    './assets/img/burger_menu_4.png',
    './assets/img/burger_menu_3.png',
    './assets/img/burger_menu_2.png',
    './assets/img/burger_menu_1.png',
    './assets/img/burger_menu_0.png'
  ];
  stage: number = 0;
  animationInterval: any;
  isReversed: boolean = false;
  currentImage: string = this.images[this.stage];
  isAnimating: boolean = false;

  constructor(private router: Router) { }

  animateBurgerMenu() {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;
    this.clearInterval();
    const currentImages = this.isReversed ? this.reverseImages : this.images;
    this.stage = 0;
    this.currentImage = currentImages[this.stage];
    this.imageAnimationInterval();
    this.toggleMenuRoute();
  }

  clearInterval() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }

  imageAnimationInterval() {
    const currentImages = this.isReversed ? this.reverseImages : this.images;
    this.animationInterval = setInterval(() => {
      this.stage++;
      if (this.stage >= currentImages.length) {
        clearInterval(this.animationInterval);
        this.isReversed = !this.isReversed;
        this.isAnimating = false;
      } else {
        this.currentImage = currentImages[this.stage];
      }
    }, 35);
  }

  toggleMenuRoute() {
    if (this.router.url === '/menu') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/menu']);
    }
  }
}