import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductDataService} from '../../services/product-data.service';
import {CartService} from '../../services/cart.service';

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

  showPopup(): void {
    this.onButtonClick.emit();
  }
  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  public changeCategory(event: MouseEvent, newCategory: string = ''): void {
    event.preventDefault();
    this.selectedCategory = newCategory;
  }

  // public showCount = (): void => {
  //   this.cartServices.getCartServices();
  // }
}
