import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  servicesService = inject(ServicesService)
  services: {title: string,enTitle:string, image: string, description: string}[] = [];
  _router = inject(Router)

  ngOnInit(){
      this.services = this.servicesService.services;
}
isMobileScreen(){
  return window.innerWidth <= 600;
}
navigateToService(title: any){
  console.log(title)
  // const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  // this._router.navigate([formattedTitle]);
 this._router.navigate([title])
}
}
