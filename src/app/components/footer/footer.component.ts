import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
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
