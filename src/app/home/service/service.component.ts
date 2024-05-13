import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.Service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  servicesService = inject(ServicesService)
  services: {title: string, image: string, description: string}[] = [];

  ngOnInit(){
      this.services = this.servicesService.services;
}
isMobileScreen(){
  return window.innerWidth <= 600;
}
}
