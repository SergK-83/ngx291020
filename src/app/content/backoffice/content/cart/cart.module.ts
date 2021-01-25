import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../../shared/shared.module';

export const childRoutes: Routes = [
  {
    path: '',
    component: CartComponent,
  }
]

@NgModule({
  declarations: [CartComponent, CartProductComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes),
  ]
})
export class CartModule { }
