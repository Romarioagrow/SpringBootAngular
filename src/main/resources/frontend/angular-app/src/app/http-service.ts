import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from "./product";
import {Observable} from "rxjs";

@NgModule()
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  readonly URL_GET_ALL_PRODUCT = 'http://localhost:9000/api/products/get/all/';

  readonly URL_CREATE_PRODUCT = 'http://localhost:9000/api/products/create/';

  readonly URL_EDIT_PRODUCT = 'http://localhost:9000/api/products/edit/';

  readonly URL_DELETE_PRODUCT = 'http://localhost:9000/api/products/delete/';

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_GET_ALL_PRODUCT);
  }

  public createNewProduct(product: Product) {
    return this.http.post(this.URL_CREATE_PRODUCT, product);
  }

  public editProduct(product: Product) {
    return this.http.put(this.URL_EDIT_PRODUCT, product);
  }

  public deleteProduct(productId: string): Observable<any> {
    const deleteProductUrl = this.URL_DELETE_PRODUCT + productId;
    return this.http.delete<number>(deleteProductUrl);

    /*return this.http.delete(deleteProductUrl).subscribe(response => {
      return response;
    });*/
  }

}
