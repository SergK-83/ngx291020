import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductsFilterPipe} from './products-filter.pipe';
import {SharedModule} from '../../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

export const childRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class ProductsModule { }
