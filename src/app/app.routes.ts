import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'magazine', component: DetailPageComponent, pathMatch: 'full' },

  { path: '**', component: NotfoundPageComponent },
];
