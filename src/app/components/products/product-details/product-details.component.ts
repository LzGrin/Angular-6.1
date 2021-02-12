import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../model/product.model';
import {products} from '../../../../../server/mocks/products.mock';
import { ActivatedRoute, Params } from '@angular/router';
import {ProductDataService} from '../../../services/product-data.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
public productDetails!: Product;
  // public productId: Product[] = products;
     constructor(private productService: ProductService,
                 private route: ActivatedRoute) {
     }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: any) => {
    const productId = params?.productId || '';
    this.productDetails = this.productService.getProductById(productId);
        });
  }
}
