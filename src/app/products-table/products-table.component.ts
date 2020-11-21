import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild (MatTable, {static: true}) datatable: MatTable<any>;

  products: Product[];
  prodColumns: string[] = ["id", "name", "price", "description", "department"];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct
      .subscribe((p) => {
        this.datatable.renderRows();
    });
  }

}
