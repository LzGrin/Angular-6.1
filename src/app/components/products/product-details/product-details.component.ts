import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../model/product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Observer, Subject} from 'rxjs';
import {products} from '../../../../../server/mocks/products.mock';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
public productDetails!: Product;
  private unsubscribe$: Subject<void> = new Subject();
  // public product!: Product;
     constructor(private productService: ProductService,
                 private route: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.route.params // тут ангулар понимает и ищет по рутам наш что надо создать продукт-детеилс
       .subscribe((params: Params) => { // тут возвращается пармас из которого мы берем нужный кусок урл
      const productId = params?.productId || ''; // тут сохраняем его в поле
      this.productService.getProductById(productId) // просим сервисдать нам продукт по найденому ид выше
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe( (product: Product) => { // сразу подписались, тут принимаем сразу продукт, который нам вернется из обсервбл
        this.productDetails = product; // и вот тут сохраняем найденный продукт в поле, чтобы потом к нему обратиться
      });
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
