
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { CategoryService } from "src/app/api/categoryApi";
import { Category } from "src/app/model/categoryModel";

import { GetAllCategories } from "../actions/category.actions";

export interface CategoryModelState{
    categories: Category[];
}
@State<CategoryModelState>({
    name: 'categories',
    defaults: {
        categories : []
    }
})
@Injectable()
export class CategoryState {
    constructor(private service: CategoryService){
        
    }

    @Selector()
    static categories(state: CategoryModelState){
        return state.categories
    }

    @Action(GetAllCategories)
    getAllCategories(ctx: StateContext<CategoryModelState>, action: GetAllCategories) {
        return this.service.getCategories().subscribe((c) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                categories: c
            })
        })
        
    }
}