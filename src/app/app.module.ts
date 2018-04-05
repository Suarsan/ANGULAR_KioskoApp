import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { MagazineRatingComponent } from './components/magazine-rating/magazine-rating.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { MagazinePreviewComponent } from './components/magazine-preview/magazine-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { MagazineService } from './services/magazine-service/magazine.service';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AuthService } from './services/auth-service/auth.service';
import { UserService } from './services/user-service/user.service';
import { UserDaoService } from '../dao/user-dao/user-dao.service';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { MenubarComponent } from './menubar/menubar.component';
import { WalletComponent } from './wallet/wallet.component';
import { NewCreditCardComponent } from './components/newcreditcard/newcreditcard.component';
import { ListCreditCardComponent } from './components/listcreditcard/listcreditcard.component';
import { environment } from '../environments/environment';
import { WalletDaoService } from '../dao/wallet-dao/wallet-dao.service';
import { WalletService } from './services/wallet-service/wallet.service';
import { ProfileComponent } from './profile/profile.component';
import { AdressesComponent } from './adresses/adresses.component';
import { MagazineCarouselComponent } from './components/magazine-carousel/magazine-carousel.component';
import { MagazineDaoService } from '../dao/magazine-dao/magazine-dao.service';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { EditCreditCardComponent } from './edit-credit-card/edit-credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    IndexComponent,
    HomeComponent,
    DetailComponent,
    ViewComponent,
    WalletComponent,
    AdressesComponent,
    MenubarComponent,
    ProfileComponent,
    MagazineRatingComponent,
    MagazinePreviewComponent,
    NewCreditCardComponent,
    ListCreditCardComponent,
    NotfoundComponent,
    MagazineCarouselComponent,
    FooterComponent,
    GridComponent,
    EditCreditCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BarRatingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MagazineService, AuthService, UserService, WalletService,
              UserDaoService, MagazineDaoService, WalletDaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
