import { Component, Inject, PLATFORM_ID} from '@angular/core'; 
import { IProduct } from '../../shared/types/product-d-t';
import { ProductService } from '../../shared/services/product.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent {
  public big_item: IProduct | undefined;
  public trending_products: IProduct[] = [];
  public discount_products: IProduct[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.big_item = products.find(p => p.big_img);
      this.trending_products = products.filter(p => p.trending).slice(0, 6);
      this.discount_products = products.filter((p) => p.discount! > 0).slice(0,12);
    });
  }


  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {}
  }
}
