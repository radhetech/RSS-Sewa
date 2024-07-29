import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './home/banner/banner.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SakhaVrutComponent } from './sakha-vrut/sakha-vrut.component';
import { SevaUpakramaComponent } from './seva-upakrama/seva-upakrama.component';
import { SevaKaryaComponent } from './seva-karya/seva-karya.component';
import { UtsavaVrttaComponent } from './utsava-vrtta/utsava-vrtta.component';
import { SevaDarshanComponent } from './seva-darshan/seva-darshan.component';
import { ErrorComponent } from './error/error.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SnackbarComponent,
    FooterComponent,
    BannerComponent,
    DashboardComponent,
    NavbarComponent,
    SakhaVrutComponent,
    SevaUpakramaComponent,
    SevaKaryaComponent,
    UtsavaVrttaComponent,
    SevaDarshanComponent,
    ErrorComponent,
    ProfileComponent,
    AdminProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
