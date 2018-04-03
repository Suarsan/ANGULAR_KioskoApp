import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ViewComponent } from './view/view.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';
import { AdressesComponent } from './adresses/adresses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'magazine', component: DetailComponent },
  { path: 'view', component: ViewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'adresses', component: AdressesComponent },
  { path: 'wallet', component: WalletComponent },
  { path: '**', component: NotfoundComponent },
];
