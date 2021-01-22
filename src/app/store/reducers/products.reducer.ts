import {Action, createReducer, on} from '@ngrx/store';
import {getProductsSuccess} from '../actions/products.actions';


export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

const initialState: IProduct[] = [];

const reducer = createReducer(
  initialState,
  on(getProductsSuccess, (_state, action) => {
    return action.products;
  })
);

export default function productsReducer(state: any, action: Action): any {
  return reducer(state, action);
}