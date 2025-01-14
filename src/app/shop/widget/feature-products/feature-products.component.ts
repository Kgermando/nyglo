import { Component } from '@angular/core'; 
import { IProduct } from '../../../shared/types/product-d-t';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-feature-products',
  templateUrl: './feature-products.component.html',
  styleUrls: ['./feature-products.component.scss']
})
export class FeatureProductsComponent {

  public feature_products:IProduct[] = [];

  constructor(public productService:ProductService){
    this.productService.products.subscribe((products) => {
      this.feature_products = products.filter(p => p.trending).slice(0,2)
    });
  }

}
