import {Component, Input, isDevMode, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product';
import {HttpService} from '../http-service';
import {SharedDataService} from '../data-service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  //@Input() newProduct: Product;

  constructor(private http: HttpClient,
              private httpService: HttpService,
              private sharedDataService: SharedDataService
  ) {}

  displayedColumns: string[] =
    ['productID', 'productName', 'productType', 'productPrice', 'amount', 'productionDate', 'actions'];
  tableProducts: Product[] = [];

  ngOnInit(): void {

    this.findAll();
    /*this.sharedDataService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });*/
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
      });
  }
}
