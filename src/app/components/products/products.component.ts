import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';
import {ActivatedRoute, Params} from '@angular/router';
import {BehaviorSubject, Observable, pipe, ReplaySubject, Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {products} from '../../mocks/products.mock';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  public searchValue = '';

  public productList: Subject<Product[]> = new ReplaySubject();
  public loader$: Observable<boolean> = new BehaviorSubject<boolean>(false);
  private unsubscribe$: Subject<void> = new Subject();

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.loader$ = this.productService.isLoading();
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const categoryId = params?.categoryId || '';
        this.productService.setCurrentCategory(categoryId);
        this.productService.getProductsByCategory()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(products => this.productList.next(products));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
