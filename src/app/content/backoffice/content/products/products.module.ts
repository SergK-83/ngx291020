import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductsFilterPipe} from './products-filter.pipe';
import {SharedModule} from '../../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ProductsService} from './products.service';
import { OneProductComponent } from './one-product/one-product.component';

export const childRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: OneProductComponent
  }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductsFilterPipe,
    OneProductComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(childRoutes)
  ],
  providers: [
    ProductsService,
    // {
    //   provide: ProductsService,
    //   useClass: ProductsService
    // }
  ]
})
export class ProductsModule { }
