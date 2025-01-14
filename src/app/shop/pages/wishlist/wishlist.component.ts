import { Component } from '@angular/core'; 
import { WishlistService } from '../../../shared/services/wishlist.service';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent {
  constructor(
    public wishlistService: WishlistService,
    public cartService: CartService
  ) {}
}
