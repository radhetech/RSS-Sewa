import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ServicesService{
    services = [
        {title: 'Sakha Vrtta', image: './assets/services/service1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {title: 'Seva Upakrama', image: './assets/services/service2.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {title: 'Seva Karya', image: './assets/services/service3.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {title: 'Utsava Vrtta', image: './assets/services/service4.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {title: 'Seva Darshan', image: './assets/services/service1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ]
  
}