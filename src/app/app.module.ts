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
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MagazineRatingComponent,
    MagazinePreviewComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    NotfoundComponent,
    ViewComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BarRatingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MagazineService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
