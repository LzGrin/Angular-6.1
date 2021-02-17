import {Observable, of} from 'rxjs';
import {Product} from '../model/product.model';
import {products} from '../../../server/mocks/products.mock';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  getProductById(id: string): Product  {
      const result = products.find(element => element.id === id);
      if (result) { return result; } else { return {} as Product; }

  }
}
