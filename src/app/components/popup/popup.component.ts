import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit {
  @Input() childTemplate?: TemplateRef<any>;

  public categories: string[] = [];

  public selectedCategory = '';
  public productline: Product[] = [
    {
      id: '1888-0050', name: 'MOSER LI+PRO2', category: 'Машинки',
      description: 'Профессиональная машинка с комбинрованным питанием', price: 213, count: 1, imageUrl: '/assets/images/триммер2.jpg'
    }
  ];
  category: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    // this.categories = this.productService.getCategories();
  }

  public closePopup(event: MouseEvent, newCategory: string = ''): void {
    event.preventDefault();
    this.selectedCategory = newCategory;
  }
}
