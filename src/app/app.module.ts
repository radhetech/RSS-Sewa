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
import { UtsavVrutComponent } from './utsav-vrut/utsav-vrut.component';
import { SevaDarshanComponent } from './seva-darshan/seva-darshan.component';
import { ErrorComponent } from './error/error.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ApiService } from './services/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SelectNagarComponent } from './select-nagar/select-nagar.component';
import { SelectShakhaComponent } from './select-shakha/select-shakha.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AccordionModule } from 'primeng/accordion';
import { NewShakhaVrutComponent } from './new-shakha-vrut/new-shakha-vrut.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReportComponent } from './report/report.component';
import { JillaVrutComponent } from './jilla-vrut/jilla-vrut.component';
import { SummaryReportComponent } from "./report/summary/summary.component";
import { DetailReportComponent } from "./report/detail/detail.component";
import { StatisticsReportComponent } from "./report/statistics/statistics.component";
import { I1 } from './services/interceptor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
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
    UtsavVrutComponent,
    SevaDarshanComponent,
    ErrorComponent,
    ProfileComponent,
    AdminProfileComponent,
    SelectNagarComponent,
    SelectShakhaComponent,
    BreadcrumbComponent,
    NewShakhaVrutComponent,
    ReportComponent,
    JillaVrutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule,
    RadioButtonModule,
    SummaryReportComponent,
    DetailReportComponent,
    StatisticsReportComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule
],
  providers: [
    provideAnimationsAsync(),
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I1,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
