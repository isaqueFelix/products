import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id: 1, name: "Clothing"},
    {id: 2, name: "Books"},
    {id: 3, name: "Electronics"},
    {id: 4, name: "Computers"},
  ];

  constructor() { }

  getDepartments(): Department[]{
    return this.departments;
  }

  addDepartments(d: Department){
    this.departments.push(d);
  }

  getDepartmentById(id: number): Department{
    return this.departments.find((d) => d.id == id);
  }
}
