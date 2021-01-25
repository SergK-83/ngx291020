import { Component, OnInit } from '@angular/core';
import {IRootState} from '../../../../store';
import {Store} from '@ngrx/store';
import {ICartProduct, selectProductInCart} from '../../../../store/reducers/cart.reducer';
import {Observable} from 'rxjs';
import {
  decrementProductInCart,
  incrementProductInCart,
  removeProductFromCart
} from '../../../../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products$: Observable<ICartProduct[]> = this.store.select(selectProductInCart);

  constructor(
    private store: Store<IRootState>
  ) { }

  ngOnInit(): void {
  }

  public increment({_id: id}: ICartProduct): void {
    this.store.dispatch(incrementProductInCart({id}));
  }

  public decrement({_id: id, count}: ICartProduct): void {
    if (count === 1) {
      this.remove(id);
      return;
    }
    this.store.dispatch(decrementProductInCart({id}));
  }

  public remove(id: string): void {
    this.store.dispatch(removeProductFromCart({id}));
  }
}
