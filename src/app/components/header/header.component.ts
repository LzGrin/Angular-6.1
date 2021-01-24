import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() childTemplate?: TemplateRef<any>;

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
