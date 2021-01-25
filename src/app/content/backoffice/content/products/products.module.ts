import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {ProductsFilterPipe} from './products-filter.pipe';
import {SharedModule} from '../../../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { OneProductComponent } from './one-product/one-product.component';
import {OneProductResolverService} from './one-product/one-product-resolver.service';
import {ProductsService} from './products.service';

export const childRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: OneProductComponent,
    resolve: {
      product: OneProductResolverService
    }
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
    OneProductResolverService
    // {
    //   provide: ProductsService,
    //   useClass: ProductsService
    // }
  ]
})
export class ProductsModule { }
