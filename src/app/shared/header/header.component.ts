import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
    './header-responsive.component.scss',
  ]
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
  currentPath: string = '/';
  currentLanguage: string = 'en';
  translate = inject(TranslationService);

  constructor(public menuService: MenuService, private router: Router) { }

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
    this.menuService.toggleMenu();
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
    }, 40);
  }

  toggleMenuRoute() {
    if (this.router.url === '/menu') {
      document.body.style.overflow = 'auto';
      this.router.navigate([this.currentPath]);
    } else {
      document.body.style.overflow = 'hidden';
      this.currentPath = this.router.url;
      this.router.navigate(['/menu']);
    }
  }

  get isMenuRoute(): boolean {
    return this.router.url === '/menu';
  }

  get isImprintRoute(): boolean {
    return this.router.url === '/imprint';
  }

  scrollToTop() {
    window.scrollTo(0, 0);
    history.pushState(null, '', window.location.pathname);
  }

  navigateToHome() {
    this.stage = 0;
    this.isReversed = false;
    this.currentImage = this.images[this.stage];
    this.router.navigateByUrl('/');
  }
}
