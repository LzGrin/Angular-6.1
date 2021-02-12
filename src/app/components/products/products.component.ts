import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {BehaviorSubject, Observable, pipe, ReplaySubject, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {products} from '../../../../server/mocks/products.mock';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public productList: Product[] = products;
  private unsubscribe$: Subject<void> = new Subject();
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe( (productList: Product[]) => {
        this.productList = productList;
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
