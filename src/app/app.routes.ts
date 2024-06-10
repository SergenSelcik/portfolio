import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './main-page/menu/menu.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'menu', component:  MenuComponent},
    // { path: '', redirectTo: '/mainpage', pathMatch: 'full' }
  ];
