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
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  }, {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
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
    path:'sakha-vrtta',
    component:SakhaVrttaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'seva-upakrama',
    component:SevaUpakramaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'seva-karya',
    component:SevaKaryaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'utsava-vrtta',
    component:UtsavaVrttaComponent,
    canActivate:[authguardGuard]
  },
  {
    path:'seva-darshan',
    component:SevaDarshanComponent,
    canActivate:[authguardGuard]
  }, {
    path:'**',
    component:ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
