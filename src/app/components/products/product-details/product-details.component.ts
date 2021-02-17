import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../model/product.model';
import { ActivatedRoute} from '@angular/router';




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
