import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SakhaVrutComponent } from './sakha-vrut/sakha-vrut.component';
import { SevaUpakramaComponent } from './seva-upakrama/seva-upakrama.component';
import { SevaKaryaComponent } from './seva-karya/seva-karya.component';
import { UtsavaVrttaComponent } from './utsava-vrtta/utsava-vrtta.component';
import { SevaDarshanComponent } from './seva-darshan/seva-darshan.component';
import { authguardGuard } from './services/Auth/authguard.guard';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { NewShakhaVrutComponent } from './new-shakha-vrut/new-shakha-vrut.component';
import { ReportComponent } from './report/report.component';
import { JillaVrutComponent } from './jilla-vrut/jilla-vrut.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
   {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'ShakhaVrut',
    component: NewShakhaVrutComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'SevaUpakrama',
    component: SevaUpakramaComponent,
    // canActivate: [authguardGuard]
  },
  {
    path: 'SevaKarya',
    component: SevaKaryaComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'UtsavaVrut',
    component: UtsavaVrttaComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'SevaDarshan',
    component: SevaDarshanComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'Admin',
    component: AdminProfileComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'jillaVrut',
    component: JillaVrutComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'Report',
    component: ReportComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'Profile',
    component: ProfileComponent,
    canActivate: [authguardGuard],
  },
  // {
  //   path: 'manageShakha',
  //   component: ProfileComponent,
  //   canActivate: [authguardGuard]
  // },
  
  {
    path: '**',
    component: ErrorComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
