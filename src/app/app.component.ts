import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {
  public isPopupShow = false;
  public cartCount = 0;
  changeCount(cartCount: number): void {
    this.cartCount = cartCount;
  }
  openPopup(): void {
    this.isPopupShow = true;
  }
    closePopup(): void {
    this.isPopupShow = false;
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
