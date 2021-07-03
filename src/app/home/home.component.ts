import { Category } from './../model/categoryModel';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../model/productModel';
import { GetAllProducts } from '../store/actions/product.actions';
import { CategoryState } from '../store/state/category.state';
import { ProductState } from '../store/state/product.state';
import { GetAllCategories } from '../store/actions/category.actions';
import { ThemaState } from '../store/state/thema.state';
import { MenuThema } from '../model/menuThemaModel';
import { GetThema } from '../store/actions/thema.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Select(ProductState.products) Products!: Observable<
  Product[]
>;
  @Select(CategoryState.categories) Category!: Observable<Category[]>;
  @Select(ThemaState.thema) Thema!: Observable<MenuThema[]>;
  constructor(private store: Store) { }
  products!: Product[];
  categories!: Category[];
  filteredProducts!: Product[];
  filteredCategories!: Category[];
  backproducts: Array<number> = [];
  thema!: MenuThema[];
  message: string = "";
  productId!: number;
  bestProduct!: Product;
  ngOnInit(): void {
    this.store.dispatch(new GetAllCategories());
    this.store.dispatch(new GetAllProducts());
    this.store.dispatch(new GetThema());
    this.Thema.subscribe((t) => this.thema = t);
    this.Category.subscribe((c) => this.categories = c);
    this.Category.subscribe((fc) => this.filteredCategories = fc.filter(c => c.parentId == 0));
    this.Products.subscribe((p) => this.products = p);
    this.Products.subscribe((fp) => this.filteredProducts = fp);
    this.Thema.subscribe((t) => this.thema = t);
    this.bestProduct = this.filteredProducts.find(a => a.id == 7)!;
    
  }
  changeProducts(id: number){    
    this.backproducts.push(id);   
    this.filteredProducts = this.products.filter(a => a.categoryId.includes(id));
    if(this.filteredProducts.length > 0)
    {      
      this.filteredCategories = this.categories.filter(a => a.parentId == id);
    }
  }
  goBack(){
   this.backproducts.pop();
   console.log(this.backproducts[this.backproducts.length - 1]);
   if(this.backproducts[this.backproducts.length - 1] == undefined){ 
    this.Category.subscribe((fc) => this.filteredCategories = fc.filter(c => c.parentId == 0));
    this.Products.subscribe((fp) => this.filteredProducts = fp);
   }
   else{
    this.filteredProducts = this.products.filter(a => a.categoryId.includes(this.backproducts[this.backproducts.length -1]));
    this.filteredCategories = this.categories.filter(a => a.parentId == this.backproducts[this.backproducts.length -1]);
    }
    
    
  }
}
