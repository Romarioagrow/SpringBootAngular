/*
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from "../product";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) {
    //this.usersUrl = 'http://localhost:8080/users';
  }


  ngOnInit(): void {
    console.log('ngOnInit')

    this.findAll()

  }

  public findAll(): any {
    const url = 'http://localhost:9000/api/products/get/all'
    return this.http.get<Product[]>(url).subscribe(value => {
      console.log(value)
      console.log(value)
    });
  }

}




*/




import {Component, isDevMode, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Product} from "../product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private http: HttpClient){}

  displayedColumns: string[] = ['productID', 'productName', 'productType', 'productPrice'];
  dataSource :  Object = [];

  ngOnInit(): void {

    this.findAll();

    /*let apiUrl = 'api/products'
    let url = isDevMode() ? 'http://localhost:9000/app-cli/' + apiUrl : apiUrl
    console.log('let url: ' + url)

    this.http.get(url,{
      headers: {'Access-Control-Allow-Origin':'*'}
    }).subscribe(data => {
      console.log(data);
      if (data) {
        this.dataSource = data;
      }
    });*/
  }

  public findAll(): any {
    const url = 'http://localhost:9000/api/products/get/all'
    return this.http.get<Product[]>(url).subscribe(value => {
      console.log(value)
      console.log(value)
    });
  }

  createProductsList() {
    console.log('createProductsList')

    let apiUrl = 'api/products/createList'
    let url = isDevMode() ? 'http://localhost:8080/app-cli/' + apiUrl : apiUrl
    console.log('createProductsList url: ' + url)

    this.http.get(url,{
      headers: {'Access-Control-Allow-Origin':'*'}
    }).subscribe(data => {
      console.log(data);
      if (data) {
        console.log(data)
        this.dataSource = data
      }
    });

  }

}
