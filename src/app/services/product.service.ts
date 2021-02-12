import {Observable, of} from 'rxjs';
import {Product} from '../model/product.model';
import {products} from '../../../server/mocks/products.mock';

export class ProductService {
  constructor() {
  }
  getProducts(): Observable<Product[]> {
    return of(products);
  }

  getProductById(id: string): Product  {
      const result = products.find(element => element.id === id);
      if (result) { return result; } else { return {} as Product; }

  }
}
