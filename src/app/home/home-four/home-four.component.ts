import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { EffectFade, Pagination } from 'swiper/modules';
import { HeroSliderData } from '../../shared/data/hero-slider-data';
import { IHeroSlider } from '../../shared/types/hero-slider-t';
import { ProductService } from '../../shared/services/product.service';
import { IProduct } from '../../shared/types/product-d-t';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-home-four',
  templateUrl: './home-four.component.html',
  styleUrls: ['./home-four.component.scss'],
})

export class HomeFourComponent {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public hero_slider_data: IHeroSlider[] = HeroSliderData.hero_slider_four;
  public swiperInstance: Swiper | undefined;

  public trendingProducts: IProduct[] = [];
  public perView: number = 10;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.trendingProducts = products.filter((p) => p.trending);
    });
  }
  // handle per view
  handlePerView() {
    this.perView = this.perView + 4;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.heroSliderContainer) {
        this.swiperInstance = new Swiper('.slider-active', {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          effect: 'fade',
          modules: [Pagination, EffectFade],
          pagination: {
            clickable: true,
            el: '.tp-slider-dot',
          },
        });
      }
    }
    
  }
}
