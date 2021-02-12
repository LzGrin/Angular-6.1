import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {
  @Output() openPopup = new EventEmitter<void>();
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }
  _openPopup(): void {
    this.openPopup.emit();
  }
}
