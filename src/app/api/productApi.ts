import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/productModel';
@Injectable({
    providedIn: 'root'
  })
  
export class ProductService {
    constructor(private http: HttpClient){}

    getCategories(){
        return this.http.get<Product[]>(`${environment.application.baseUrl}/products`)
    }
}