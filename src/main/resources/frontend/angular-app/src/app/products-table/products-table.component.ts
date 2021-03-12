import {Component, isDevMode, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product';
import {HttpService} from '../http-service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor(private http: HttpClient, private httpService: HttpService) {
  }

  displayedColumns: string[] =
    ['productID', 'productName', 'productType', 'productPrice', 'amount', 'productionDate', 'actions'];
  tableProducts: Product[] = [];

  ngOnInit(): void {

    this.findAll();

  }

  public findAll(): void {
    this.httpService.getAllProducts().subscribe((data) => {
      console.log('data', data);
      this.tableProducts = data;
    });
  }

  editProduct(product: Product) {

    console.log('edit', product);

  }

  deleteProduct(productId: string) {
    console.log('delete', productId);
    this.httpService.deleteProduct(productId).subscribe(
      response => {
        console.log('delete response', response);
        this.tableProducts = this.tableProducts.filter(tableProduct => tableProduct.productId !== productId);
      }, error => {
        console.log('delete error', error);
        console.log('error status:', error.status);
      });
  }
}
