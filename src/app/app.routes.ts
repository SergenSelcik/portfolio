import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './main-page/menu/menu.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MySkillsComponent } from './main-page/my-skills/my-skills.component';
import { AboutMeComponent } from './main-page/about-me/about-me.component';
import { PortfolioComponent } from './main-page/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'menu', component: MenuComponent },
    ]
  },
  { path: 'imprint', component: ImprintComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' }
];
