import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';
import {ProductDataService} from '../../services/product-data.service';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.less']
})
export class ProductLineComponent implements OnInit {
  @Input()  product!: Product;

  constructor(private productDataService: ProductDataService) {
  }

  ngOnInit(): void {
  }
  countChange(count: number): void {
    this.productDataService.addProductToCart(this.product.id, count);
  }
}
