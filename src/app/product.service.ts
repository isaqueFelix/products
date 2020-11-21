import { EventEmitter, Injectable } from '@angular/core';
import { DepartmentService } from './department.service';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: "Laptop", department_id: 4, price: 40, description: "Laptop"},
    {id: 2, name: "Shirt", department_id: 1, price: 10, description: "Shirt"},
    {id: 3, name: "Polo", department_id: 1, price: 50, description: "Polo"},
    {id: 4, name: "Mouse", department_id: 4, price: 40, description: "Mouse"},
  ];

  private products: Product[] = [];

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService) {
    for(let p of this.dataFromServer){
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.department_id),
      });
    }
  }

  getProducts(): Product[]{
    return this.products;
    console.log(this.products);
  }

  addProduct(p: Product){
    let newId: number = this.products.length + 1;
    let prod: Product = { id: newId, ...p}; 
    this.products.push(prod);
    console.log(this.products);
    this.onNewProduct.emit(prod);
  }
}
