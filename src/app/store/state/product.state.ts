import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductService } from "src/app/api/productApi";
import { Product } from "src/app/model/productModel";
import { GetAllProducts } from "../actions/product.actions";


export interface ProductModelState{
    products: Product[];
}
@State<ProductModelState>({
    name: 'products',
    defaults: {
        products : []
    }
})
@Injectable()
export class ProductState {
    constructor(private service: ProductService){
        //service
    }

    @Selector()
    static products(state: ProductModelState){
        return state.products
    }

    @Action(GetAllProducts)
    getAllproducts(ctx: StateContext<ProductModelState>, action: GetAllProducts) {
        return this.service.getCategories().subscribe((p) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                products: p
            })
        })
    }
}