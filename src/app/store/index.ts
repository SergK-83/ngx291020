import productsReducer, {IProduct} from './reducers/products.reducer';

export interface IRootState {
  products: IProduct;
}

export const reducers = {
  products: productsReducer
}
