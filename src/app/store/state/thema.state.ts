
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { CategoryService } from "src/app/api/categoryApi";
import { ThemaService } from "src/app/api/themaApi";
import { Category } from "src/app/model/categoryModel";
import { MenuThema } from "src/app/model/menuThemaModel";

import { GetAllCategories } from "../actions/category.actions";
import { GetThema } from "../actions/thema.actions";

export interface ThemaModelState{
    thema: MenuThema[];
}
@State<ThemaModelState>({
    name: 'thema',
    defaults: {
        thema : []
    }
})
@Injectable()
export class ThemaState {
    constructor(private service: ThemaService){
        
    }

    @Selector()
    static thema(state: ThemaModelState){
        return state.thema
    }

    @Action(GetThema)
    getAllCategories(ctx: StateContext<ThemaModelState>, action: GetThema) {
        return this.service.getThema().subscribe((t) => {
            const state = ctx.getState();
            ctx.setState({
                ...state,
                thema: t
            })
        })
        
    }
}