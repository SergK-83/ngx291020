import productsReducer, {IProductsState} from './reducers/products.reducer';
import cartReducer, {ICartProduct} from './reducers/cart.reducer';
import {EntityState} from '@ngrx/entity';

export interface IRootState {
  products: IProductsState;
  cart: EntityState<ICartProduct>;
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer
}
