import {products} from '../../../server/mocks/products.mock';
import {Product} from '../model/product.model';


export class ProductDataService {
  public productListInCart: Product[] = [];

  addProductToCart(id: string): void {
    const result = products.find(element => element.id === id);
    if (result) {
      this.productListInCart.push(result);
    }
  }

}

