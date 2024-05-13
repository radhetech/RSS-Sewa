import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SakhaVrttaComponent } from './sakha-vrtta/sakha-vrtta.component';
import { SevaUpakramaComponent } from './seva-upakrama/seva-upakrama.component';
import { SevaKaryaComponent } from './seva-karya/seva-karya.component';
import { UtsavaVrttaComponent } from './utsava-vrtta/utsava-vrtta.component';
import { SevaDarshanComponent } from './seva-darshan/seva-darshan.component';
import { authguardGuard } from './services/Auth/authguard.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'SakhaVrtta',
    component:SakhaVrttaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'SevaUpakrama',
    component:SevaUpakramaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'SevaKarya',
    component:SevaKaryaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'UtsavaVrtta',
    component:UtsavaVrttaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'SevaDarshan',
    component:SevaDarshanComponent,
    canActivate:[authguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
