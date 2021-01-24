import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.less']
})
export class ProductLineComponent implements OnInit {
  @Input()  product?: Product;

  public categories: string[] = [];

  public selectedCategory = '';
  productline: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  public changeCategory(event: MouseEvent, newCategory: string = ''): void {
    event.preventDefault();
    this.selectedCategory = newCategory;
  }
}
