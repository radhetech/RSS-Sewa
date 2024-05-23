import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  services = [
    {
      title: 'શાખા વૃત્ત',
      image: './assets/services/Vrut.webp',
      description: 'સેવા દિવસ (ગુરૂવાર) નું વૃત્ત માટે',
    },
    {
      title: 'સેવા ઉપક્રમ',
      image: './assets/services/Shikshan1.webp',
      description: 'સેવા ઉપક્રમની વિગતો ભરવા માટે',
    },
    {
      title: 'સેવા કાર્ય',
      image: './assets/services/Sevabharati.jpeg',
      description: 'સેવા કાર્યની વિગતો ભરવા માટે',
    },
    {
      title: 'ઉત્સવ વૃત',
      image: './assets/services/utsav.jpeg',
      description: 'ઉત્સવનું વૃત્ત આપવા માટે',
    },
    {
      title: 'સેવા દર્શન',
      image: './assets/services/sevadarshan.jpeg',
      description: 'સેવા દર્શનની વિગતો ભરવા માટે',
    },
  ];
}
