import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product';
import {HttpService} from '../http-service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  @Input('childToMaster') newProduct: Product;

  @Output() productChanged: EventEmitter<Product> = new EventEmitter();

  constructor(private http: HttpClient,
              private httpService: HttpService,
  ) {}

  displayedColumns: string[] =
    ['productID', 'productName', 'productType', 'productPrice', 'amount', 'productionDate', 'actions'];
  tableProducts: Product[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  addEditedProductToTable(editedProduct: Product): void {
    console.log('addEditedProductToTable', editedProduct);

    const index = this.tableProducts.findIndex((product) => product.productId === editedProduct.productId);
    if (index > 0) {
      this.tableProducts[index] = editedProduct;
      this.tableProducts = [...this.tableProducts];
    }
  }

  addNewProductToTable(product: Product): void {
    console.log('addNewProductToTable', product);
    this.tableProducts = [...this.tableProducts];
    this.tableProducts.push(product);
    console.log('tableProducts', this.tableProducts);
  }

  public findAll(): void {
    this.httpService.getAllProducts().subscribe((data) => {
      console.log('data', data);
      this.tableProducts = data;

    });
  }

  editProduct(productToEdition: Product): void {
    console.log('edit', productToEdition);


    /*
    *
    * 1 Send product data to editor
    * 2 Save edited fields to product in table
    * */




    this.productChanged.emit(productToEdition);



    /*this.httpService.editProduct(productToEdition).subscribe((response) => {
      console.log(response);

    })*/

  }

  deleteProduct(productId: string): void {
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
