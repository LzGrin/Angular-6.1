import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product.model';
import {ProductDataService} from '../../services/product-data.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class PopupComponent implements OnInit{
  public productListInCart: Product[] = [];
  public cartCount = 0;
@Output() public onChangeCount: EventEmitter<number> = new EventEmitter<number>();
@Output() public onClosePopup: EventEmitter<void> = new EventEmitter<void>();

  increment(): void {
    this.cartCount = this.cartCount + 1;
    this.onChangeCount.emit(this.cartCount);
  }
  decrement(): void {
    this.cartCount = this.cartCount - 1;
    this.onChangeCount.emit(this.cartCount);
  }

    // public productline: Product[] = [
  //   {
  //     id: '1888-0050', name: 'MOSER LI+PRO2', category: 'Машинки',
  //     description: 'Профессиональная машинка с комбинрованным питанием', price: 213, count: 1, imageUrl: '/assets/images/триммер2.jpg'
  //   }
  // ];
      constructor(private productService: ProductService,
                  private productDataService: ProductDataService) {
  }

  ngOnInit(): void {
   this.productListInCart = this.productDataService.productListInCart;
  }
  _closePopup(): void {
        this.onClosePopup.emit();
  }
  //
}
