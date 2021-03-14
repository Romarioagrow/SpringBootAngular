import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from "./product";
import {Observable} from "rxjs";

@NgModule()
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  readonly URL_GET_ALL_PRODUCT = 'api/products/get/all/';

  readonly URL_CREATE_PRODUCT = 'api/products/create/';

  readonly URL_EDIT_PRODUCT = 'api/products/edit';

  readonly URL_DELETE_PRODUCT = 'api/products/delete/';

  readonly DEV_SERVER_HOST_NAME = 'http://localhost:9000/';

  readonly PROD_SERVER_HOST_NAME = 'https://spring-boot-angular-cli.herokuapp.com/';

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.resolveDomainUrl(this.URL_GET_ALL_PRODUCT));
  }

  public createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.resolveDomainUrl(this.URL_CREATE_PRODUCT), product);
  }

  public editProduct(product: Product): Observable<any> {
    return this.http.put(this.resolveDomainUrl(this.URL_EDIT_PRODUCT), product);
  }

  public deleteProduct(productId: string): Observable<any> {
    const deleteProductUrl = this.resolveDomainUrl(this.URL_DELETE_PRODUCT) + productId;
    return this.http.delete<number>(deleteProductUrl);
  }

  private resolveDomainUrl(url: string): string {
    const currentDomain = window.location.toString();

    if (currentDomain === this.PROD_SERVER_HOST_NAME) {
      return this.PROD_SERVER_HOST_NAME + url;
    }
    else {
      return this.DEV_SERVER_HOST_NAME + url;

    }
  }
}
