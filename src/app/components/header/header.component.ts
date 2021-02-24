import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
// import {ProductService} from '../../services/product.service';
import {ProductDataService} from '../../services/product-data.service';
// import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public count: number = 0;
  @Input() public set cartCount(value: number) {
    this.count = value;
  }
  @Output() onButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onButtonClickUserProfile: EventEmitter<void> = new EventEmitter<void>();
  @Output() onButtonClickAdminProfile: EventEmitter<void> = new EventEmitter<void>();
  constructor(private productDataService: ProductDataService) {
  }

  showPopup(): void {
    this.onButtonClick.emit();
  }
  ngOnInit(): void {
    this.productDataService.getCartCount$().subscribe((count: number) => {
      this.count = count;
    });
  }

  showUserProfile(): void {
    this.onButtonClickUserProfile.emit();
  }
  showAdminProfile(): void {
    this.onButtonClickAdminProfile.emit();
  }

}
