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
  tableProducts: any = [];

  ngOnInit(): void {

    this.findAll();

  }

  public findAll(): void {
    this.httpService.getAllProducts().subscribe((data) => {
      // console.log(data);
      // if (data) {
      console.log('data', data);
      this.tableProducts = data.slice();
      console.log('tableProducts', this.tableProducts);


      /*if (data /!*&& data instanceof Product*!/) {
        console.log('data instanceof', data);
        this.tableProducts.push(data);
      }
      else {
        console.log('no instance');
      }*/
      // = data;
      // }
    });
  }

  editProduct(product: Product) {

    console.log('edit', product);

  }

  deleteProduct(productId: string) {
    console.log('delete', productId);
    this.http.delete(productId).subscribe(response => {
      console.log('delete response', response);


    });
    /*this.httpService.deleteProduct(productId).subscribe(response => {
      console.log('delete response', response);
    });*/
  }
}
