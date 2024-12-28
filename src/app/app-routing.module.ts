import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { ShakhavrutComponent } from './demo/pages/shakhavrut/shakhavrut.component';
import { SevakaryaComponent } from './demo/pages/sevakarya/sevakarya.component';
import { UtsavvrutComponent } from './demo/pages/utsavvrut/utsavvrut.component';
import { JillavrutComponent } from './demo/pages/jillavrut/jillavrut.component';
import { ReportComponent } from './demo/pages/report/report.component';
import { VahivatComponent } from './demo/pages/vahivat/vahivat.component';
import { SevaupkramComponent } from './demo/pages/sevaupkram/sevaupkram.component';
import DashboardComponent from './demo/dashboard/dashboard.component';
import { authguardGuard } from './services/authguard.guard';
import AuthSigninComponent from './demo/pages/authentication/auth-signin/auth-signin.component';
import { LogoutComponent } from './demo/pages/logout/logout.component';
import { NotFoundComponent } from './demo/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    // canActivate: [authguardGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      
      },
      {
        path: 'shakhavrut',
        component: ShakhavrutComponent,
        
      },
      {
        path: 'sevaupkram',
        component: SevaupkramComponent,
        
      },
      {
        path: 'sevakary',
        component: SevakaryaComponent,
       
      },
      {
        path: 'utsavvrut',
        component: UtsavvrutComponent,
         
      },
      {
        path: 'jillavrut',
        component: JillavrutComponent,
        
      },
      {
        path: 'vahivat',
        component: VahivatComponent,
         
      },
      {
        path: 'report',
        component: ReportComponent,
         
      }
    ]
  },

  {
    path: 'login',
    component: AuthSigninComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
