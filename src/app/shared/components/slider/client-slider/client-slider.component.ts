import { Component,Input } from '@angular/core';
import Swiper from 'swiper';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-client-slider',
  templateUrl: './client-slider.component.html',
  styleUrls: ['./client-slider.component.scss']
})
export class ClientSliderComponent {

  @Input() style_2 : Boolean = false;
  // client logos
  public client_logos = [
    '/assets/img/nyglo-client/anadec.png',
    '/assets/img/nyglo-client/min_commerce_exterieur.jpeg',
    '/assets/img/nyglo-client/anapex.jpeg',
    '/assets/img/nyglo-client/milvest.jpeg',
    
    // '/assets/img/client/client-1.jpg', 
    // '/assets/img/client/client-2.jpg',
    // '/assets/img/client/client-3.jpg',
    // '/assets/img/client/client-4.jpg',
    // '/assets/img/client/client-5.jpg',
    // '/assets/img/client/client-4.jpg',
    // '/assets/img/client/client-2.jpg',
  ]

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
       // client slider
    new Swiper('.client__slider', {
      slidesPerView: 5,
      spaceBetween: 0,
      loop: false,
      breakpoints: {
        '1200': {
          slidesPerView: 5,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 1,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    })
    }
   
  }

}
