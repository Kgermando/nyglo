import { Component, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import IBlogType from '../../../types/blog-d-t';
import blog_data from '../../../data/blog-data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog-slider',
  templateUrl: './blog-slider.component.html',
  styleUrls: ['./blog-slider.component.scss']
})
export class BlogSliderComponent {
  public blogData: IBlogType[] = blog_data.filter(b => b.blog === 'home');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // blog slider
      new Swiper('.blog__slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
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
