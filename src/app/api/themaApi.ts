import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuThema } from '../model/menuThemaModel';


@Injectable({
    providedIn: 'root'
  })
  
export class ThemaService {
    constructor(private http: HttpClient){}

    getThema(){
        console.log("dgfdf");
        return this.http.get<MenuThema[]>(`${environment.application.baseUrl}/thema`)
    }
}