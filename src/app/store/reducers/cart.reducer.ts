import {Action, createReducer, on} from '@ngrx/store';
import {IProduct} from './products.reducer';
import {createEntityAdapter} from '@ngrx/entity';
import {
  addProductToCart,
  decrementProductInCart,
  incrementProductInCart,
  removeProductFromCart
} from '../actions/cart.actions';


export interface ICartProduct extends IProduct{
  count: number;
}

export const cartAdapter = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});

const initialState = cartAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(addProductToCart, (_state, {product}) => {
    const entity = _state.entities[product._id] as ICartProduct;
    return cartAdapter.upsertOne({...product, count: entity ? ++entity.count : 1}, _state);
  }),
  on(removeProductFromCart, (_state, {id}) => {
    return cartAdapter.removeOne(id, _state);
  }),
  on(incrementProductInCart, (_state, {id}) => {
    const entity = _state.entities[id] as ICartProduct;
    const count = entity.count + 1;
    return cartAdapter.updateOne({id, changes: {count}}, _state);
  }),
  on(decrementProductInCart, (_state, {id}) => {
    const entity = _state.entities[id] as ICartProduct;
    const count = entity.count - 1;
    return cartAdapter.updateOne({id, changes: {count}}, _state);
  })
);

export default function cartReducer(state: any, action: Action): any {
  return reducer(state, action);
}
