import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/categoryModel';

@Injectable({
    providedIn: 'root'
  })
  
export class CategoryService {
    constructor(private http: HttpClient){}

    getCategories(){
        return this.http.get<Category[]>(`${environment.application.baseUrl}/categories`)
    }
}