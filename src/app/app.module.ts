import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MagazineRatingComponent } from './components/magazine-rating/magazine-rating.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { MagazinePreviewComponent } from './components/magazine-preview/magazine-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { MagazineService } from './services/magazine.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    MagazineRatingComponent,
    MagazinePreviewComponent,
    HomePageComponent,
    SignupPageComponent,
    SigninPageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    BarRatingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MagazineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
