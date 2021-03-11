import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbButtonGroupModule, NbButtonModule, NbLayoutModule} from "@nebular/theme";
import {MatTableModule} from "@angular/material/table";
import {RouterModule} from "@angular/router";
import { ProductInputFormComponent } from './product-input-form/product-input-form.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductInputFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbButtonModule,
    MatTableModule,
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    NbButtonGroupModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
