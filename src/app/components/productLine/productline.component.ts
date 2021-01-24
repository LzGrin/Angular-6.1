import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-productline',
  templateUrl: './productline.component.html',
  styleUrls: ['./productline.component.less']
})
export class ProductlineComponent implements OnInit {
  @Input()  product?: Product;

  public categories: string[] = [];

  public selectedCategory = '';

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
