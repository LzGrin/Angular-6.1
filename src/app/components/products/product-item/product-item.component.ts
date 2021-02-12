import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from 'src/app/model/product.model';
import {CartService} from '../../../services/cart.service';
import {ProductDataService} from '../../../services/product-data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;

  @Output() addToCart: EventEmitter<any> = new EventEmitter();

  currentCurrency = '$';
    constructor(private cartService: CartService,
                private productDataService: ProductDataService) {
  }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    let cartCount = this.cartService.getCartCount();
    this.cartService.setCartCount(++cartCount);
    this.productDataService.addProductToCart(this.product.id);
   }
}
