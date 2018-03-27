import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ViewComponent } from './view/view.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreditCardsComponent } from './creditcards/creditcards.component';

export const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'magazine', component: DetailComponent },
  { path: 'view', component: ViewComponent },
  { path: 'payments', component: CreditCardsComponent },
  { path: '**', component: NotfoundComponent },
];
