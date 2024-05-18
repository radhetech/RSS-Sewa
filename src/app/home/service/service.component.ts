import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  servicesService = inject(ServicesService)
  services: {title: string, image: string, description: string}[] = [];
  _router = inject(Router)

  ngOnInit(){
      this.services = this.servicesService.services;
}
isMobileScreen(){
  return window.innerWidth <= 600;
}
navigateToService(title: string){
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  this._router.navigate([formattedTitle]);

}
}
