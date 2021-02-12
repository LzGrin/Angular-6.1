import {products} from '../../../server/mocks/products.mock';
import {Product} from '../model/product.model';
import {Observable, Subject} from 'rxjs';


export class ProductDataService {
  public productListInCart: Product[] = [];
  public cartCount$: Subject<number> = new Subject<number>();

  addProductToCart(id: string, count: number = 1): void {
    const result = products.find(element => element.id === id);
    if (result) {
      const lineProduct = this.productListInCart.find(element => element.id === id);
      if (lineProduct) {
        lineProduct.count = count;
      }else {
        this.productListInCart.push(result);
      }
      this.updateCartCount();
    }
  }

  updateCartCount(): void {
    const countCart = this.productListInCart.reduce((summ: number, currentValue: Product) => summ + currentValue.count, 0);
    this.cartCount$.next(countCart);
  }

  getCartCount$(): Observable<number> {
    return this.cartCount$.asObservable();
  }

}

