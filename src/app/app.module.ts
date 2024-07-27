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
import { ServiceComponent } from './home/service/service.component';
import { HighLightDirective } from './home/service/custom-directive/high-light.directive';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SakhaVrttaComponent } from './sakha-vrtta/sakha-vrtta.component';
import { SevaUpakramaComponent } from './seva-upakrama/seva-upakrama.component';
import { SevaKaryaComponent } from './seva-karya/seva-karya.component';
import { UtsavaVrttaComponent } from './utsava-vrtta/utsava-vrtta.component';
import { SevaDarshanComponent } from './seva-darshan/seva-darshan.component';
import { ErrorComponent } from './error/error.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SelectNagarComponent } from './select-nagar/select-nagar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SnackbarComponent,
    FooterComponent,
    BannerComponent,
    ServiceComponent,
    HighLightDirective,
    NavbarComponent,
    SakhaVrttaComponent,
    SevaUpakramaComponent,
    SevaKaryaComponent,
    UtsavaVrttaComponent,
    SevaDarshanComponent,
    ErrorComponent,
    ProfileComponent,
    AdminProfileComponent,
    SelectNagarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
