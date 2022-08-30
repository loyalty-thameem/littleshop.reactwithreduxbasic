import { combineReducers } from "redux";
import {productReducers, selectedProductReducers} from './productReducers';

export const allReducer = combineReducers(
    {
        allProducts: productReducers,
        product: selectedProductReducers
    }
)