import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from './model/product.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  public isPopupShow = false;
  public isUserProfileShow = false;
  public isAdminProfileShow = false;
  public cartCount = 0;
    constructor() {
  }
  changeCount(cartCount: number): void {
    this.cartCount = cartCount;
  }
  openPopup(): void {
    this.isPopupShow = true;
  }
    closePopup(): void {
    this.isPopupShow = false;
}
  openUserProfile(): void {
      this.isUserProfileShow = true;
  }
  closeUserProfile(): void {
    this.isUserProfileShow = false;
  }
  closeAdminProfile(): void {
    this.isAdminProfileShow = false;
  }





      // @Output() closePopup = new EventEmitter<void>();
  // @Output() openPopup = new EventEmitter<void>();
  // public searchValue = '';
  // public cartCount = 0;
  //
  // constructor() {
  // }
  //
  //
  // public searchProducts(event: KeyboardEvent): void {
  //   this.searchValue = (event.target as HTMLInputElement).value;
  // }
  // _closePopup() {
  // }

}
