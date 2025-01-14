import { Component, Inject, PLATFORM_ID } from '@angular/core'; 
import { IProduct } from '../../shared/types/product-d-t';
import { ProductService } from '../../shared/services/product.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrls: ['./home-three.component.scss']
})
export class HomeThreeComponent {

  public big_item_1: IProduct | undefined;
  public big_item_2: IProduct | undefined;
  public trending_products: IProduct[] = [];
  public discount_products: IProduct[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.big_item_1 = products.filter(p => p.big_img)[0];
      this.big_item_2 = products.filter(p => p.big_img)[1];
      this.trending_products = products.filter(p => p.trending);
      this.discount_products = products.filter((p) => p.discount! > 0).slice(0,5);
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {}
  }

}
